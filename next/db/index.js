import { Pool } from "pg";

export const sipulauPool = new Pool({
  database: "big_sipulau",
});
export const umamiPool = new Pool({
  database: "big_sipulau_umami",
});
