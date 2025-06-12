'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { uploadFile } from "./uploadFile";
export default function Page() {
    return <section className="container">
        <h1>投稿</h1>
        <form action={uploadFile}>
            <input type="text" name="title" className="form-control" placeholder="タイトル" />
            <input type="file" name="file" />
            <button type="submit" className="btn btn-primary my-2">アップロード</button>
        </form>
    </section>;
}


