export default function Layout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
    <>
        <h1>法政大学アプリ</h1>
        <div>{children}</div>
        <hr />
    </>
    )
    }