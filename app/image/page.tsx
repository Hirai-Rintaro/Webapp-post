import Image from 'next/image'
export default function Page() {
 return (
 <>
 <h1>画像のテスト</h1>
 <Image src="/images/usakame.jpg" width={300} height={300} alt="うさぎとかめ" />
 </>
 )
}