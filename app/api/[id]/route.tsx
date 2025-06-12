import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(
 request: Request,
 { params }: { params: { id: string } }
) {
 const item = await prisma.book.findUnique({
 where: { id: Number(params.id) },
 });
 return Response.json({ book: item }, { status: 200 });
}
