'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";

export default function Page() {
    return (
        <section className="container d-flex justify-content-center align-items-center flex-column py-5">
            <h1 className="text-center mb-4 fw-light">お知らせ</h1>
            <div className="row justify-content-center">
                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">レイアウト変更</h6>
                            <p className="card-text">レイアウトを一部変更いたしました。</p>
                            <div className="mt-auto text-end">
                                <small className="text-muted">更新：2024/12/30</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">お問い合わせフォームの開設</h6>
                            <p className="card-text">お問い合わせフォームを開設いたしました。何かご不明な点、機能リクエスト等ございましたらぜひご利用ください。</p>
                            <a href="/memovie/inquiry" className="btn btn-outline-primary">詳細を見る</a>
                            <div className="mt-auto text-end">
                                <small className="text-muted">更新：2024/12/30</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">サービス開始</h6>
                            <p className="card-text">2024/12/28より、サービスを開始いたしました。</p>
                            <div className="mt-auto text-end">
                                <small className="text-muted">更新：2024/12/30</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
