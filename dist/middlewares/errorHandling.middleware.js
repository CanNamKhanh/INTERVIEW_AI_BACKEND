"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandingMiddleware = void 0;
const errorHandingMiddleware = (err, req, res, next) => {
    return res.status(500).json({
        message: err.message,
    });
};
exports.errorHandingMiddleware = errorHandingMiddleware;
//# sourceMappingURL=errorHandling.middleware.js.map