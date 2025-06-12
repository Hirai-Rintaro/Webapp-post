'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoItemComponent from './PhotoItemComponent';
import React, { SetStateAction, useEffect, useState } from 'react';
import Link from "next/link";
import { getList } from './server'

export default function Page() {
    const [list, setList] = useState<any>();
    useEffect(() => {
        getList().then((val) => {
            const results = [];
            val.forEach((post, index) => {
                results.push(
                    <div key={index}>
                        <PhotoItemComponent item={post}></PhotoItemComponent>
                    </div>
                );
            });
            setList(results);
        });
    }, []);
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Home</h1>
                        <p><Link href="/memovie/post" className="btn btn-secondary my-2 sidebutton btn-lg btn-xl">
                            <span style={{ color: "#87ceeb" }}>POST</span>
                        </Link></p>
                    </div>
                </div>
            </section>
            <div className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {list}
                    </div>
                </div>
            </div>
        </>
    );
}