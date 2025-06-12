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
 <p>品名: {message.item}</p>
 <p>個数: {message.count}</p>
 <p>値段: {message.price}</p>
 <p>種類: {message.type}</p>
 <p>お店: {message.shop}</p>
 <hr />
 </div>
 );
 });
 if(list?.length!=results.length) setList(results);
 });
 });
 return (
 <div>
 <h1 className="text-3xl font-bold underline">買ったものリスト</h1>
 <form action={formAction} className="col-2">
 <div><input type="text" name="item" className="form-control" placeholder="品名" /></div>
 <div><input type="text" name="count" className="form-control" placeholder="個数" /></div>
 <div><input type="text" name="price" className="form-control" placeholder="値段" /></div>

 <div className="mb-2">
 <p>種類</p>
 <div className="form-check form-check-inline">
 <input className="form-check-input" type="radio" id="radio_1" name="type" value="食品" />
 <label className="form-check-label" htmlFor="radio_1">食品</label>
 </div>
 <div className="form-check form-check-inline">
 <input className="form-check-input" type="radio" id="radio_2" name="type" value="雑貨" />
 <label className="form-check-label" htmlFor="radio_2">雑貨</label>
 </div>
 </div>

 <div className="mb-2">
 <p>買ったお店</p>
 <select name="shop" className="form-select">
 <option value="マルエツ">マルエツ</option>
 <option value="まいばすけっと">まいばすけっと</option>
 <option value="ローソン">ローソン</option>
 </select>
 </div>

 <button type="submit" className="btn btn-primary">登録</button>
 {list}
 </form>
 </div>
 );
}
