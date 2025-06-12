import 'bootstrap/dist/css/bootstrap.min.css';
export default function Page() {
 async function postAction(formData) {
 'use server'
 const title = formData.get('title')
 const author = formData.get('author')
 const data = { title: title, author: author };
 const res = await fetch('http://localhost:3000/api/', {
 method: 'POST',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify(data),
 });
 }
 return (
 <>
 <h1 className="text-3xl font-bold underline">書籍の登録</h1>
 <form action={postAction} className="col-2">
 <div><input type="text" name="title" className="form-control" placeholder="タイトル" /></div>
 <div><input type="text" name="author" className="form-control" placeholder="著者" /></div>
 <button type="submit" className="btn btn-primary">登録</button>
 </form>
 </>
 );
}