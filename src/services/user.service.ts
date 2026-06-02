import { prisma } from "../libs/prisma";

export const getMeService = async (userId: string) => {
  const meInfo = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!meInfo) throw new Error("User not found");

  return meInfo;
};
