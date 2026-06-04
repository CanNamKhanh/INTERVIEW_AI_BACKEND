import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  registerService,
  loginService,
  logoutService,
} from "../services/auth.service";
import { AuthRequest } from "../middlewares/auth.middleware";
import { prisma } from "../libs/prisma";

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

export const refreshTokenController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { refreshToken } = req.body;

    // 1. Verify xem Refresh Token có hợp lệ/hết hạn hay không
    // Lưu ý: Thay "YOUR_REFRESH_TOKEN_SECRET" bằng biến môi trường process.env.REFRESH_TOKEN_SECRET của bạn
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!,
    ) as {
      userId: string;
    };

    if (!decoded || !decoded.userId) {
      res
        .status(401)
        .json({ success: false, message: "Invalid refresh token" });
      return;
    }

    // 2. (Tùy chọn nhưng KHUYẾN KHÍCH) Kiểm tra xem User đó có còn tồn tại trong DB không
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      res
        .status(401)
        .json({ success: false, message: "User not found or suspended" });
      return;
    }

    // 3. Tạo Access Token mới
    const newAccessToken = jwt.sign(
      { id: user.id, email: user.email }, // Payload lưu vào token
      process.env.JWT_SECRET!, // Thay bằng process.env.ACCESS_TOKEN_SECRET
      { expiresIn: "15m" }, // Thời gian sống của access token mới
    );

    // 4. (Tùy chọn) Kỹ thuật Rotation - Tạo thêm Refresh Token mới để tăng tính bảo mật
    const newRefreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: "7d" },
    );

    // 5. Trả token mới về cho phía Client
    res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken, // Nếu không dùng cơ chế rotate thì chỉ cần trả lại chính cái cũ hoặc không trả trường này
      },
    });
  } catch (error) {
    console.log("❌ LỖI REFRESH TOKEN:", error);

    // Nếu token bị hết hạn hoặc sai chữ ký, jwt.verify sẽ quăng ra lỗi
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({
        success: false,
        message: "Refresh token expired. Please login again.",
      });
      return;
    }

    const message =
      error instanceof Error ? error.message : "Authentication failed";
    res.status(401).json({ success: false, message });
  }
};
