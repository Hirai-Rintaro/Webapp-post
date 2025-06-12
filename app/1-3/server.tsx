'use server'
export async function loginAction(state: unknown, formData: FormData) {
const user_id = formData.get('user_id')
const password = formData.get('password')
console.log({user_id, password});
if(user_id=="hosei" && password=="tamachi")
 return {
 message: 'OK!',
 }
else
 return {
 message: 'NG!',
 }
}