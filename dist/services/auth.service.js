"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutService = exports.loginService = exports.registerService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../libs/prisma");
const redis_1 = require("../libs/redis");
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRED = process.env.JWT_EXPIRED || "7d";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_REFRESH_EXPIRED = process.env.JWT_REFRESH_EXPIRED || "7d";
const generateAccessToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, JWT_SECRET, {
        expiresIn: (JWT_EXPIRED || "1h"),
    });
};
const generateRefreshToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, JWT_REFRESH_SECRET, {
        expiresIn: (JWT_REFRESH_EXPIRED || "7d"),
    });
};
const registerService = async (input) => {
    const { name, email, password } = input;
    const existingUser = await prisma_1.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error("Email already in use");
    }
    const passwordHash = await bcrypt_1.default.hash(password, SALT_ROUNDS);
    const user = await prisma_1.prisma.user.create({
        data: { name, email, passwordHash },
        select: { id: true, name: true, email: true, createdAt: true },
    });
    return { user };
};
exports.registerService = registerService;
const loginService = async (input) => {
    const { email, password } = input;
    const user = await prisma_1.prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    return {
        accessToken,
        refreshToken,
    };
};
exports.loginService = loginService;
const logoutService = async (token) => {
    const decoded = jsonwebtoken_1.default.decode(token);
    if (!decoded?.exp)
        throw new Error("Invalid token");
    const ttl = decoded.exp - Math.floor(Date.now() / 1000);
    if (ttl > 0) {
        await redis_1.redisClient.set(`blacklist:${token}`, "1", {
            EX: ttl,
        });
    }
    return { token };
};
exports.logoutService = logoutService;
//# sourceMappingURL=auth.service.js.map