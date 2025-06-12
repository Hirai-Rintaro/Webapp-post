'use client'
import Link from "next/link";
import "..//globals.css";

export default function Page() {
return (
<div>
<h1>こんにちは</h1>
<p>詳しくは
<Link href="/hello">こちら</Link>
をクリックしてください</p>
</div>
);
}