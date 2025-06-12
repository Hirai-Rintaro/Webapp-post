'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoItemComponent from './PhotoItemComponent';
import React, { SetStateAction, useEffect, useState } from 'react'
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
            <div className="row py-lg-5">
               <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">タイムライン</h1>
                  <p>
                     <Link href="/isosta/post" className="btn btn-primary my-2">投稿</Link>
                  </p>
               </div>
            </div>
         </section>
         <div className="album py-5 bg-light">
            <div className="container">
               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {list}
               </div>
            </div>
         </div>
      </>
   );
}