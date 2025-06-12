'use server'
export async function postAction(state: unknown, formData: FormData) {
const username = formData.get('username')
return {
 message: username + 'さん、こんにちは!',
}
}