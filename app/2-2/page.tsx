'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useActionState } from 'react'
import { postAction,getList } from './server'
import React, { useEffect,useState } from 'react'
import "../globals.css";

const initialState = { result: '' }
export default function Page() {
 const [state, formAction] = useActionState(postAction, initialState);
 const [list, setList] = useState<string>();

 useEffect(() => {
 getList().then((val) => {
 const results = [];
 val.forEach((message, index) => {
 results.push(
 <div key={index}>
 <p>名前: {message.name}</p>
 <p>メッセージ: {message.text}</p>
 <hr />
 </div>
 );
 });
 if(list?.length!=results.length) setList(results);
 });
 });
 return (
 <div>
 <h1 className="text-3xl font-bold underline">投稿テスト</h1>
 <form action={formAction} className="col-2">
 <div><input type="text" name="name" className="form-control" placeholder="名前" /></div>
 <div><input type="text" name="text" className="form-control" placeholder="メッセージ" /></div>
 <button type="submit" className="btn btn-primary">送信</button>
 {list}
 </form>
 </div>
 );
}
