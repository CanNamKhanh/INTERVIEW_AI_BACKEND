import { Request, Response } from "express";
import {
  registerService,
  loginService,
  logoutService,
} from "../services/auth.service";
import { AuthRequest } from "../middlewares/auth.middleware";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await registerService(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    const statusCode = message === "Email already in use" ? 409 : 500;
    res.status(statusCode).json({ success: false, message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await loginService(req.body);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    const statusCode = message === "Invalid email or password" ? 401 : 500;
    res.status(statusCode).json({ success: false, message });
  }
};

export const logout = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(400).json({ success: false, message: "No token provided" });
      return;
    }

    await logoutService(token);
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, message: error.message });
      return;
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
