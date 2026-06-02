"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = "AppError";
    }
}
exports.AppError = AppError;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (err, _req, res, _next) => {
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
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map