import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Script from 'next/script'
import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
 title: "メニュー"
};

export default function Page() {
    return (<>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Main navigation">
     <div className="container-fluid">
     <a className="navbar-brand" href="#">アプリ</a>
     <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>
    
     <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item"><Link className="nav-link" href="/">ホーム</Link></li>
     <li className="nav-item"><Link className="nav-link" href="/">お知らせ</Link></li>
     <li className="nav-item"><Link className="nav-link" href="/">マイページ</Link></li>
     <li className="nav-item dropdown">
     <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">設定</a>
     <ul className="dropdown-menu" aria-labelledby="dropdown01">
     <li><Link className="dropdown-item" href="/login">ログイン</Link></li>
     <li><Link className="dropdown-item" href="/">プロフィール</Link></li>
     <li><Link className="dropdown-item" href="/">お問い合わせ</Link></li>
     </ul>
     </li>
     </ul>
     <form className="row">
     <div className="col-auto"><input className="form-control" type="search" placeholder="キーワード" aria-label="Search"></input></div>
     <div className="col-auto"><button className="btn btn-outline-success" type="submit">検索</button></div>
     </form>
     </div>
     </div>
     </nav>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
     </>
    )
    }