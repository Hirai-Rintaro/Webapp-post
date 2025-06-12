'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";

export default function Page() {
    const [commentLength, setCommentLength] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const address = formData.get('address') as string;
        const sort = formData.get('sort') as string;
        const content = formData.get('content') as string;

        const mailtoLink = `mailto:rintaro.hirai.3z@stu.hosei.ac.jp?subject=問い合わせフォームからのメッセージ&body=
        お名前: ${encodeURIComponent(name)}%0A
        メールアドレス: ${encodeURIComponent(address)}%0A
        お問い合わせの種類: ${encodeURIComponent(sort)}%0A
        お問い合わせ内容: ${encodeURIComponent(content)}`;

        window.location.href = mailtoLink;
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => { 
        setCommentLength(event.target.value.length);
    };

    return (
    <section className="container">
        <p></p>
        <h3>お問い合わせフォーム</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-2 col-md-4">
                <input type="text" name="name" className="form-control" placeholder="お名前" />
            </div>
            <div className="mb-2 col-md-4">
                <input type="text" name="address" className="form-control" placeholder="メールアドレス" />
            </div>
            <div className="mb-2 col-md-4">
                <select name="sort" className="form-select" defaultValue="">
                    <option value="" disabled>お問い合わせの種類</option>
                    <option value="お問い合わせ">お問い合わせ</option>
                    <option value="機能追加などのご要望">機能追加などのご要望</option>
                    <option value="その他ご意見">その他ご意見</option>
                </select>
            </div>

            <div className="mb-3">
                <textarea 
                name="content" 
                className="form-control no-resize" 
                rows={5}
                maxLength={400}
                placeholder="お問い合わせ内容" 
                onChange={handleCommentChange}>
                </textarea>
                <div className="char-count mt-2">
                    <span id="current-count">{commentLength}</span>/400 文字
                </div>
            </div>
            {/*メールアプリに遷移*/}
            <button type="submit" className="btn btn-outline-primary my-2">送信</button>
        </form>
    </section>);
}