"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
const client_1 = require("../prisma/src/generated/prisma/client");
const adapter = new adapter_mariadb_1.PrismaMariaDb(process.env.DATABASE_URL);
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ??
    new client_1.PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development"
            ? ["query", "warn", "error"]
            : ["error"],
        // omit: {
        //   user: {
        //     passwordHash: true,
        //   },
        // },
    });
exports.prisma = prisma;
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
//# sourceMappingURL=prisma.js.map