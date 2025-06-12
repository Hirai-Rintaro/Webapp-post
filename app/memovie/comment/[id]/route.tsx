import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const reviewWithComments = await prisma.review.findUnique({
            where: { id: params.id },
            include: {
                comments: true,  // コメント取得
            },
        });
        return new Response(JSON.stringify({ comments: reviewWithComments.comments || [] }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'コメントの取得に失敗' }), { status: 500 });
    }
}

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { content } = await request.json();

        const newComment = await prisma.comment.create({
            data: {
                content: content,
                reviewId: params.id,  //レビューIDの指定
            },
        });

        return new Response(JSON.stringify({ result: 'OK', newComment }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'コメントの投稿に失敗' }), { status: 500 });
    }
}