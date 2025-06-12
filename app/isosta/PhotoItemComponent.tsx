import Image from 'next/image'
import { useState } from 'react'; //追加
import { useEffect } from 'react'; //追加
import DetailComponent from './DetailComponent'; //追加

export default function PhotoItemComponent({ item }) {
    const [isOpen, setIsOpen] = useState(false); //拡大

    const [likes, setLikes] = useState(0); //いいね欄
    const likeClick = () => {
        setLikes(likes + 1);
        const data = {};
        const res = fetch('http://localhost:3000/isosta/like/' + item.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    };
    useEffect(() => {
        setLikes(item.likes);
    }, []);


    return ( //追加
        <>
            <DetailComponent item={item}
                open={isOpen} onCancel={() => setIsOpen(false)} onOk={() => setIsOpen(false)} />
            <div className="col">
                <div className="card shadow-sm">
                    <Image src={"/uploads/" + item.file} onClick={() => setIsOpen(true)} width="500" height="500"
                        className="bd-placeholder-img card-img-top" alt="{item.title}" />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary"onClick={likeClick}>
                                    {likes}いいね
                                </button>
                            </div>
                            <small className="text-muted">{item.createdAt.toLocaleString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
