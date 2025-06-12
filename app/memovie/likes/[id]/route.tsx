import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { likes } = await request.json();

        const updatedReview = await prisma.review.update({
            where: { id: params.id },
            data: { likes },
        });
        return new Response(JSON.stringify({ result: 'OK', updatedReview }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update' }), { status: 500 });
    }
}

