'use server'
const guestBook = [
 { item: 'コーヒー', count: '1本' , price: '150', type: '食品', shop: 'マルエツ'},
];
export async function postAction(state: unknown, formData: FormData) {
 const item = formData.get('item')
 const count = formData.get('count')
 const price = formData.get('price')
 const type = formData.get('type')
 const shop = formData.get('shop')
 const message = { item: item, count: count, price: price, type: type, shop: shop };
 guestBook.push(message);
 return {
 result: "ok",
 }
}
export async function getList(){
 return guestBook;
}