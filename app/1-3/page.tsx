'use client'
import { useActionState } from 'react'
import { loginAction } from './server'
import Script from 'next/script' 
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
const initialState = { message: '' }


export default function Page() {
const [state, formAction] = useActionState(loginAction, initialState)
return (
    <div>
        <h1 className="text-3xl font-bold underline">ログインテスト</h1>
        <form action={formAction} className="col-2">
        <div className="mb-2">
            <input type="text" name="user_id" className="form-control" placeholder="ユーザID" />
        </div>
        <div className="mb-2">
            <input type="password" name="password" className="form-control" placeholder="パスワード" />
        </div>
        <button type="submit" className="btn btn-primary">ログイン</button>
        <div className="alert alert-primary" role="alert">
            <p>{state?.message}</p>
        </div>
        </form>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
    </div>
)
}