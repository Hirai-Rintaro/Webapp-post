'use server'
const guestBook = [
 { name: '法政花子', text: 'こんにちは' },
];
export async function postAction(state: unknown, formData: FormData) {
 const name = formData.get('name')
 const text = formData.get('text')
 const message = { name: name, text: text };
 guestBook.push(message);
 return {
 result: "ok",
 }
}
export async function getList(){
 return guestBook;
}