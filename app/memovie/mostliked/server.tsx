'use server'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
console.log(prisma);

export async function getList() {
    const movieList = await prisma.review.findMany({
        orderBy: {
            likes: 'desc',
        },
    });
    return movieList;
}