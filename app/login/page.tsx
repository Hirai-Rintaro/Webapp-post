'use client'
import { useActionState } from 'react'
import { loginAction } from './server'
import "../globals.css";
const initialState = { message: '' }
export default function Page() {
const [state, formAction] = useActionState(loginAction, initialState)
return (
 <div>
 <h1 className="text-3xl font-bold underline">ログインテスト</h1>
 <form action={formAction}>
 <div><input type="text" name="user_id" placeholder="ユーザID" /></div>
 <div><input type="password" name="password" placeholder="パスワード" /></div>
 <button type="submit" className="">ログイン</button>
 <p>{state?.message}</p>
 </form>
 </div>
)
}