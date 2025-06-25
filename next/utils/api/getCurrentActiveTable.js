import redis from "../../redis";
import { sipulauPool } from "../../db";

const islandKey = "current_titik_pulau_table";
const islandCurrentActiveTable = "titik_pulau_aktif";
const pulauTerluarKey = "current_pulau_terluar_table";
const pulauTerluarCurrentActiveTable = "pulau_terluar_aktif";

export default async function getCurrentActiveTable(dataType) {
  let key;
  let tableName;
  switch (dataType) {
    case "island":
      key = islandKey;
      tableName = islandCurrentActiveTable;
      break;
    case "pulau_terluar":
      key = pulauTerluarKey;
      tableName = pulauTerluarCurrentActiveTable;
      break;
    default:
      throw new Error("Invalid dataType in getCurrentActiveTable");
  }
  if (process.env.NODE_ENV === "production") {
    let cached = await redis.get(key);
    if (cached) {
      return cached;
    } else {
      let { rows } = await sipulauPool.query(
        `SELECT table_name FROM ${tableName}`
      );
      if (rows.length > 0) {
        await redis.set(key, rows[0].table_name);
        return rows[0].table_name;
      } else {
        throw new Error("No active table");
      }
    }
  } else {
    let { rows } = await sipulauPool.query(
      `SELECT table_name FROM ${tableName}`
    );
    if (rows.length > 0) {
      return rows[0].table_name;
    } else {
      throw new Error("No active table");
    }
  }
}