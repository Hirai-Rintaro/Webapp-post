export default async function Page(
    { params }: { params: { id: number } }
    ) {
     const response = await fetch('http://localhost:3000/api/'+params.id);
     const data = await response.json();
    
     return (
     <>
     <h1 className="text-3xl font-bold underline">{data.book.title}</h1>
     <p>著者:{data.book.author}</p>
     </>
     );
    }
    