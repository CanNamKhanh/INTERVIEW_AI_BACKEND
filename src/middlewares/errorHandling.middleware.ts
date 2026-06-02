import { ErrorRequestHandler } from "express";

export const errorHandingMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  return res.status(500).json({
    message: err.message,
  });
};
