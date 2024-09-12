import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const glovalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

if (!glovalForPrisma.prisma){
  glovalForPrisma.prisma = new PrismaClient()
}

prisma = glovalForPrisma.prisma;

export default prisma