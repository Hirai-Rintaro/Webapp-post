import 'bootstrap/dist/css/bootstrap.min.css';
export default async function Page() {
 const response = await fetch('http://localhost:3000/api/');
 const data = await response.json();

 return (
 <>
 <h1>書籍一覧</h1>
 <table className="table table-bordered">
 <thead>
 <tr>
 <th>タイトル</th>
 <th>著者</th>
 </tr>
 </thead>
 <tbody>
 {data.books.map((book)=>{
 return(
 <tr key={book.id}>
 <td>{book.title}</td>
 <td>{book.author}</td>
 </tr>
 )
 })}
 </tbody>
 </table>
 </>
 );
}