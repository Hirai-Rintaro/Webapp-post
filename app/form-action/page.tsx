'use client'
import { useActionState } from 'react'
import { postAction } from './server'
import "../globals.css";
const initialState = { message: '名無し' }
export default function Page() {
const [state, formAction] = useActionState(postAction, initialState)
return (
 <div>
 <form action={formAction}>
 <div><input type="text" name="username" placeholder="名前" /></div>
 <button type="submit" className="btn btn-sccess">送信</button>
 <p>{state?.message}</p>
 </form>
 </div>
)
}
