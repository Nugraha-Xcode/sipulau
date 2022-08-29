import Redis from "ioredis";

const redis =
  process.env.NODE_ENV === "production"
    ? new Redis(process.env.REDIS_URL)
    : null;

export default redis;
