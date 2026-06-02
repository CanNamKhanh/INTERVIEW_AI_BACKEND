"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const interview_route_1 = __importDefault(require("./routes/interview.route"));
const message_route_1 = __importDefault(require("./routes/message.route"));
// APP & HTTP SERVER
const PORT = Number(process.env.PORT) || 4000;
const app = (0, express_1.default)();
exports.app = app;
const httpServer = http_1.default.createServer(app);
exports.httpServer = httpServer;
// GLOBAL MIDDLEWARE
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3001",
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
}));
app.use((0, morgan_1.default)("dev"));
// BODY PARSERS
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ROUTES
app.use("/auth", auth_route_1.default);
app.use("/user", user_route_1.default);
app.use("/interview", interview_route_1.default);
app.use("/message", message_route_1.default);
async function bootstrap() {
    // getRedis();
    // await prisma.$connect();
    httpServer.listen(PORT, "0.0.0.0", () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
}
bootstrap().catch((err) => {
    console.error("[Server] Failed to start:", err);
    process.exit(1);
});
//# sourceMappingURL=app.js.map