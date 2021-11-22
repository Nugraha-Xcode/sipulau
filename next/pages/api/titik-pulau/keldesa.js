import { sipulauPool } from "../../../db";

export default async function kecamatanHandler(req, res) {
  const { method } = req;
  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  const { kec } = req.query;
  if (!kec) {
    return res.status(400).json({ message: "Mohon sertakan querystring kec" });
  }

  let queryResult;
  try {
    queryResult = await sipulauPool.query(
      `
      SELECT DISTINCT wadmkd
      FROM titik_pulau
      WHERE wadmkc = $1
      `,
      [kec]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  if (queryResult.rows.length) {
    return res.json(queryResult.rows.map((el) => el.wadmkd));
  } else {
    return [];
  }
}
