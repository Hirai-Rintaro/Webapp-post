'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";
import { uploadFile } from "./uploadFile";

export default function Page() {
    const [commentLength, setCommentLength] = useState(0);

    return (
        <section className="container">
            <h2 className="pagetop">POST</h2>
            <form action={uploadFile} autoComplete="off">
                <div className="mb-2 col-md-4">
                    <input type="text" name="posttitle" className="form-control" placeholder="投稿タイトル" />
                </div>
                <div className="mb-2 col-md-4">
                    <label className="form-label" htmlFor="name">作品について</label>
                    <input type="text" name="title" className="form-control" placeholder="作品名" />
                </div>
                <div className="mb-2 col-md-4">
                    <input type="text" name="director" className="form-control" placeholder="監督名" />
                </div>
                <div className="mb-2 col-md-4">
                    <select name="category" className="form-select" defaultValue="">
                        <option value="" disabled>ジャンル</option>
                        <option value="ドラマ">ドラマ</option>
                        <option value="サスペンス/ミステリー">サスペンス/ミステリー</option>
                        <option value="SF">SF</option>
                        <option value="アクション">アクション</option>
                        <option value="コメディ">コメディ</option>
                        <option value="ファンタジー">ファンタジー</option>
                        <option value="ロマンス">ロマンス</option>
                        <option value="ホラー">ホラー</option>
                        <option value="歴史">歴史</option>
                        <option value="その他">その他</option>
                    </select>
                </div>

                <div className="mb-2 col-md-4">
                    <select name="way" className="form-select" defaultValue="">
                        <option value="" disabled>鑑賞方法</option>
                        <option value="配信サービス">配信サービス</option>
                        <option value="映画館">映画館</option>
                        <option value="DVD/blu-ray/VHS">DVD/blu-ray/VHS</option>
                        <option value="TV">TV</option>
                        <option value="その他">その他</option>
                    </select>
                </div>


                <div className="mb-3">
                    <textarea name="comment" className="form-control no-resize" rows={5} maxLength={400} placeholder="コメントを入力" onChange={(e) => setCommentLength(e.target.value.length)}></textarea>
                    <div className="char-count mt-2">
                        <span id="current-count">{commentLength}</span>/400 文字
                    </div>
                </div>

                <input type="file" name="file" />
                <button type="submit" className="btn btn-outline-primary my-2">アップロード</button>
            </form>
        </section>);
}