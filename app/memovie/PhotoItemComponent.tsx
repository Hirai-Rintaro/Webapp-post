import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DetailComponent from './DetailComponent';
import "./style.css";

export default function PhotoItemComponent({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [likes, setLikes] = useState(item.likes);

    const likeClick = async() => {
    const newLikes = likes + 1;
    setLikes(newLikes);

    const data = {likes: newLikes};
    const res = await fetch(`http://localhost:3000/memovie/likes/${item.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    });
    if(res.ok){
        const result = await res.json();
        console.log('Updated likes:', result.updatedReview);
    }
    };
    useEffect(() => {
    setLikes(item.likes);
    }, [item.likes]);

    return ( 
        <>
            <DetailComponent item={item}
                open={isOpen} onCancel={() => setIsOpen(false)} onOk={() => setIsOpen(false)} />

            <div className="col">
                <div className="card shadow-sm">
                    <Image src={"/memovie_uploads/" + item.file}onClick={() => setIsOpen(true)} width="500" height="500"
                        className="bd-placeholder-img card-img-top bottomline img-center" alt="{item.title}" />
                    {/*カード内の表示項目*/}
                    <div className="card-body">
                        <p className="card-text">{item.posttitle}</p>
                        <p className="card-text small-font cardtitle">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={likeClick}>{likes}いいね</button>
                            </div>
                            <small className="card-text text-muted">鑑賞方法：{item.way}</small>
                            <small className="text-muted">{item.createdAt.toLocaleDateString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
