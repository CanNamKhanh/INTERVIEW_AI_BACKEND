import "dotenv/config";

import express from "express";
import http from "http";
import path from "node:path";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import interviewRoutes from "./routes/interview.route";
import messageRoutes from "./routes/message.route";

// APP & HTTP SERVER

const PORT: number = Number(process.env.PORT) || 4000;
const app = express();
const httpServer = http.createServer(app);

// GLOBAL MIDDLEWARE

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3001",
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);
app.use(morgan("dev"));

// BODY PARSERS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/interview", interviewRoutes);
app.use("/message", messageRoutes);

async function bootstrap(): Promise<void> {
  // getRedis();
  // await prisma.$connect();

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

bootstrap().catch((err: unknown) => {
  console.error("[Server] Failed to start:", err);
  process.exit(1);
});

export { app, httpServer };
