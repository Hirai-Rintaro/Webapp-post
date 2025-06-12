import Link from "next/link";
import Script from 'next/script'
import type { Metadata } from "next";
import './style.css'
export const metadata: Metadata = {
    title: "イソスタグラム"
};
export default function Layout({ children }: { children: React.ReactNode }) {
    return (<>
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link href="/isosta/" className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                        <strong>イソスタグラム</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarHeader">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <main>{children}</main>
        <footer className="text-muted py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#">ページTOPへ</a>
                </p>
                <p className="mb-1">&copy; 市ヶ谷イソスタグラム All right reserved.</p>
            </div>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
    </>
    )
}
