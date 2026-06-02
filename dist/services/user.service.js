"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeService = void 0;
const prisma_1 = require("../libs/prisma");
const getMeService = async (userId) => {
    const meInfo = await prisma_1.prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    if (!meInfo)
        throw new Error("User not found");
    return meInfo;
};
exports.getMeService = getMeService;
//# sourceMappingURL=user.service.js.map