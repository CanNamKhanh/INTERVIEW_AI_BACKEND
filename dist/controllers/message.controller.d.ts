import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
export declare const sendMessage: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllMessages: (req: Request<{
    interviewId: string;
}>, // Lấy interviewId từ URL params (ví dụ: /messages/:interviewId)
res: Response) => Promise<void>;
//# sourceMappingURL=message.controller.d.ts.map