import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
export interface InterviewRequest extends Request {
    userId?: string;
    interviewId?: string;
    token?: string;
    type?: string;
}
export declare const createInterview: (req: InterviewRequest, res: Response) => Promise<void>;
export declare const endInterview: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteInterview: (req: InterviewRequest, res: Response) => Promise<void>;
//# sourceMappingURL=interview.controller.d.ts.map