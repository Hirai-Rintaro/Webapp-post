import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import type { Metadata } from "next";
import "./style.css";
export const metadata: Metadata = {
    title: "MEMOVIE",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-fluid">
                    <Link href="/memovie/" className="navbar-brand d-flex align-items-center">
                        <strong>　<span style={{ color: "#00bfff" }}>ME</span>MOVIE　</strong>
                    </Link>
                    <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" href="/memovie">ホーム</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/memovie/mostliked">人気のポスト</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/memovie/post">投稿</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">その他</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><Link className="dropdown-item" href="/memovie/news">お知らせ</Link></li>
                                    <li><Link className="dropdown-item" href="/memovie/inquiry">お問い合わせ</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container">{children}</main>
            <footer className="text-muted py-5">
                <div className="container">
                    <p className="mb-1">&copy; MEMOVIE All right reserved.</p>
                    <small className="mb-1">投稿に際しての著作権侵害には十分にご注意ください。他者の著作物を引用する場合は必ず出典を明記してください。無断転載や著作権で保護された素材の使用は禁止されています。</small>
                </div>
            </footer>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
        </>     
    )
}
