import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(
 request: Request,
 { params }: { params: { id: string } }
) {
 const item = await prisma.shoppingList.findUnique({
 where: { id: Number(params.id) },
 });
 return Response.json({ shoppingList: item }, { status: 200 });
}