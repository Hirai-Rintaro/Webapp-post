'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const shoppingList = [
 { item: 'USB', maker: 'KIOXIA' , price: '1000', stock: '在庫なし'},
];
export async function postAction(state: unknown, formData: FormData) {
 const item = formData.get('item')
 const maker = formData.get('maker')
 const price = formData.get('price')
 const stock = formData.get('stock')
 const message = { item: item, maker: maker, price: price, stock: stock };
 await prisma.shoppingList.create({
 data: message,
 });
 shoppingList.push(message);
 return {
 result: "ok",
 }
}
export async function getList(){
 const shoppingList = await prisma.shoppingList.findMany();
 return shoppingList;
}