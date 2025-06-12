import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Script from 'next/script'
import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
 title: "法政SDアプリ"
};

export default function Layout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (<>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Main navigation">
     <div className="container-fluid">
     <a className="navbar-brand" href="#">法政SDアプリ</a>
     <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>
    
     <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item"><Link className="nav-link" href="/1-2">ホーム</Link></li>
     <li className="nav-item"><Link className="nav-link" href="/1-2/profile">プロフィール</Link></li>
     <li className="nav-item"><Link className="nav-link" href="/1-2/mypage">マイページ</Link></li>
     </ul>
     </div>
     </div>
     </nav>
     <div>{children}</div>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
     </>
    )
    }