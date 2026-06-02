import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware: ErrorRequestHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  if (err instanceof Error) {
    console.error("[Error]", err.message, err.stack);
    res.status(500).json({ message: "Internal server error" });
    return;
  }

  res.status(500).json({ message: "Unknown error" });
};
