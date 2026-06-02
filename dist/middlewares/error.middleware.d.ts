import type { ErrorRequestHandler } from "express";
export declare class AppError extends Error {
    readonly statusCode: number;
    constructor(statusCode: number, message: string);
}
export declare const errorMiddleware: ErrorRequestHandler;
//# sourceMappingURL=error.middleware.d.ts.map