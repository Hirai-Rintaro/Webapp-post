import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
const books = await prisma.book.findMany();
 return Response.json({ books: books }, { status: 200 });
}
export async function POST(request: Request) {
 const book = await request.json();
 const bookData = { title: book.title, author: book.author };
 await prisma.book.create({
 data: bookData,
 });
 return Response.json({ result: 'OK' }, { status: 200 });
}
