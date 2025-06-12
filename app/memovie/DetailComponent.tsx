'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export type ModalProps = {
    open: boolean;
    onCancel: () => void;
    onOk: () => void;
    item: any;
};

export default function Modal(props: ModalProps) {
    const [newComment, setNewComment] = useState<string>('');  // 入力コメントを管理
    const [comments, setComments] = useState<any[]>([]);    // コメント一覧を管理
    const item = props.item;

    const fetchComments = async () => {
        const res = await fetch(`http://localhost:3000/memovie/comment/${item.id}`);
        const data = await res.json();
        if (res.ok) {
            setComments(data.comments);
        }
    }

    const handlePostComment = async () => {
        if (newComment.trim()) {
            try {
                const res = await fetch(`http://localhost:3000/memovie/comment/${item.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: newComment }),
                });
                if (res.ok) {
                    setNewComment('');
                    fetchComments();
                }
            } catch (error) {
                console.error('エラーが発生:', error);
            }
        }
    };

    useEffect(() => {
        fetchComments();
    }, [item.id]);


    return props.open ? (
        <>
            <div className="modal d-block" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-posttitle">{item.posttitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.onCancel()}></button>
                        </div>
                        <div className="modal-body">
                            <Image src={"/memovie_uploads/" + item.file} width="300" height="300" className="bd-placeholder-img card-img-top detail-img" alt="{item.title}" />
                            <p></p>
                            <p className="modal-title">作品名：{item.title}</p>
                            <p className="modal-director">監　督：{item.director}</p>
                            <small className="modal-category">ジャンル：{item.category}</small>
                            <small className="modal-way">鑑賞方法：{item.way}</small>
                            <div>
                                <small className="modal-comment">{item.comment}</small>
                            </div>

                            {/*コメント表示*/}
                            <div className="modal-comments mt-3">
                                <h6>コメント一覧:</h6>
                                <ul>
                                    {comments.map((comment, index) => (
                                        <li key={index}>user：{comment.content}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input
                                type="text"
                                name="commentpost"
                                className="form-control"
                                placeholder="コメント"
                                autoComplete="off"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button type="button" className="btn btn-outline-primary" onClick={handlePostComment}>投稿</button>
                            <button type="button" className="btn btn-secondary" onClick={() => props.onOk()}>閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => props.onCancel()}
            ></div>

        </>
    ) : (
        <></>
    );
}