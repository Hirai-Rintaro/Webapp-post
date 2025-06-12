import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const itemData = { likes: { increment: 1 } };
    await prisma.post.update({
        where: { id: params.id },
        data: itemData
    }
    );
    return Response.json({ result: 'OK' }, { status: 200 });
}
