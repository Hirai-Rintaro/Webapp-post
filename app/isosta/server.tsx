'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getList() {
    const postList = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return postList;
}