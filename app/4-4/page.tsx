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
 <p>商品名: {message.item}</p>
 <p>メーカー名: {message.maker}</p>
 <p>価格: {message.price}</p>
 <p>在庫の有無: {message.stock}</p>
 <hr />
 </div>
 );
 });
 if(list?.length!=results.length) setList(results);
 });
 });
 return (
 <div>
 <h1 className="text-3xl font-bold underline">ネットショップの商品リスト</h1>
 <form action={formAction} className="col-2">
 <div><input type="text" name="item" className="form-control" placeholder="商品名" /></div>
 <div><input type="text" name="maker" className="form-control" placeholder="メーカー名" /></div>
 <div><input type="text" name="price" className="form-control" placeholder="価格" /></div>
 <div className="mb-2">
 <p>在庫の有無</p>
 <select name="stock" className="form-select">
 <option value="在庫あり">在庫あり</option>
 <option value="在庫なし">在庫なし</option>
 </select>
 </div>

 <button type="submit" className="btn btn-primary">登録</button>
 {list}
 </form>
 </div>
 );
}
