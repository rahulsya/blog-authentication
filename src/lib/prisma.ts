import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  //   if (!global.prisma) {
  //     global.prisma = new PrismaClient();
  //   }
  prisma = new PrismaClient();
}

export default prisma;
