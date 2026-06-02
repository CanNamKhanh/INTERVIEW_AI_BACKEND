import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL as string,
}).on("error", (err) => console.log("Redis Client Error", err));

void redisClient.connect();
