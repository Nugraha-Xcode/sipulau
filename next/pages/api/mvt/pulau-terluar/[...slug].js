import { sipulauPool } from "../../../../db";
import redis from "../../../../redis";

async function mvtDbFetch(
    layerName,
    z,
    x,
    y,
    tableName,
    featureIdCol,
    whereQuery,
    extraParams
) {
    let featureIdColForMVTFunc = featureIdCol ? `'${featureIdCol}'` : "NULL";
    featureIdCol = featureIdCol ? `,${featureIdCol}` : "";

    let mvtQuery = `
    WITH tile_envelope AS (
      SELECT ST_TileEnvelope($1, $2, $3) tile
    ), mvtgeom_table AS (
      SELECT
        ST_AsMVTGeom(ST_Transform(main.geom, 3857), tile) geom${featureIdCol}
      FROM
        ${tableName} main
      INNER JOIN
        tile_envelope ON main.geom && ST_Transform(tile, 4326)
      ${whereQuery}
    )
    SELECT
      ST_AsMVT(mvtgeom_table, $4, 4096, 'geom', ${featureIdColForMVTFunc}) mvt_buff
    FROM
      mvtgeom_table
  `;

    let {
        rows: [{ mvt_buff: mvtBuff }],
    } = await sipulauPool.query(mvtQuery, [z, x, y, layerName, ...extraParams]);
    return mvtBuff;
}

function validatePulauTerluarFilters(
    id_toponim,
    nammap,
    artinam,
    sjhnam,
    aslbhs,
    id_wilayah,
    wadmkd,
    wadmkc,
    wadmkk,
    wadmpr,
    status,
    remark
) {
    let filters = [];
    let extraParams = [];
    let param = 5;

    let equalFilters = [
        [id_toponim, "id_toponim"],
        [id_wilayah, "id_wilayah"],
        [wadmkd, "wadmkd"],
        [wadmkc, "wadmkc"],
        [wadmkk, "wadmkk"],
        [wadmpr, "wadmpr"],
    ];
    for (const filter of equalFilters) {
        if (filter[0] !== undefined) {
            extraParams.push(filter[0]);
            filters.push(`${filter[1]} = $${param++}`);
        }
    }

    let likeFilters = [
        [nammap, "nammap"],
        [artinam, "artinam"],
        [sjhnam, "sjhnam"],
        [aslbhs, "aslbhs"],
        [status, "status"],
    ];
    for (const filter of likeFilters) {
        if (filter[0] !== undefined) {
            extraParams.push(`%${filter[0]}%`);
            filters.push(`${filter[1]} ILIKE $${param++}`);
        }
    }

    // remark filter
    if (remark !== undefined) {
        if (remark === "Berpenduduk" || remark === "Tidak Berpenduduk") {
            extraParams.push(`^${remark}`);
            filters.push(`SPLIT_PART(remark, ' - ', 2) ~* $${param++}`);
        } else {
            filters.push(
                "SPLIT_PART(remark, ' - ', 2) !~* '^Berpenduduk|^Tidak Berpenduduk'"
            );
        }
    }

    return {
        whereQuery: filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "",
        extraParams,
    };
}

export default async function mvtHandler(req, res) {
    const { method } = req;
    if (method !== "GET") {
        return res
            .setHeader("Allow", ["GET"])
            .status(405)
            .json({ message: `Method ${method} Not Allowed` });
    }

    const { slug } = req.query;
    if (!Array.isArray(slug) || slug.length !== 3) {
        return res.status(400).json({ message: "Invalid path" });
    }

    let [z, x, y] = slug;
    let layerName = "pulau-terluar";
    let tableName = "pulau_terluar";
    let featureIdCol = "id_toponim";

    // validate filters
    let {
        id_toponim,
        nammap,
        artinam,
        sjhnam,
        aslbhs,
        id_wilayah,
        wadmkd,
        wadmkc,
        wadmkk,
        wadmpr,
        status,
        remark,
    } = req.query;

    let { whereQuery, extraParams } = validatePulauTerluarFilters(
        id_toponim,
        nammap,
        artinam,
        sjhnam,
        aslbhs,
        id_wilayah,
        wadmkd,
        wadmkc,
        wadmkk,
        wadmpr,
        status,
        remark
    );

    z = parseInt(z);
    x = parseInt(x);
    y = parseInt(y);

    if (isNaN(z) || isNaN(x) || isNaN(y) || z < 0 || x < 0 || y < 0) {
        return res.status(400).json({ message: "Parameter z, x, y tidak valid" });
    }

    let mvtBuff;
    try {
        if (process.env.NODE_ENV === "production") {
            mvtBuff = await redis.getBuffer(
                `mvt-${tableName}-${z}-${x}-${y}-${whereQuery}`
            );
            if (!mvtBuff) {
                mvtBuff = await mvtDbFetch(
                    layerName,
                    z,
                    x,
                    y,
                    tableName,
                    featureIdCol,
                    whereQuery,
                    extraParams
                );
                await redis.set(
                    `mvt-${tableName}-${z}-${x}-${y}-${whereQuery}`,
                    mvtBuff,
                    "EX",
                    900
                );
            }
        } else {
            mvtBuff = await mvtDbFetch(
                layerName,
                z,
                x,
                y,
                tableName,
                featureIdCol,
                whereQuery,
                extraParams
            );
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }

    if (mvtBuff.length > 0) {
        res.setHeader("Content-Type", "application/x-protobuf");
        return res.send(mvtBuff);
    } else {
        return res.status(204).send();
    }
}