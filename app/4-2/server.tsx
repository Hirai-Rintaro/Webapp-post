'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function postAction(state: unknown, formData: FormData) {
 const name = formData.get('name')
 const text = formData.get('text')
 const message = { name: name, text: text };
 await prisma.guestBook.create({
 data: message,
 });
 return {
 result: "ok",
 }
}
export async function getList(){
 const guestBook = await prisma.guestBook.findMany();
 return guestBook;
}