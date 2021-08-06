import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = await prisma.video.findMany({ include: { creator: true } });