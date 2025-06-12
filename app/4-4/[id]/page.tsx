export default async function Page(
    { params }: { params: { id: number } }
    ) {
     const response = await fetch('http://localhost:3000/api/'+params.id);
     const data = await response.json();
    
     return (
     <>
     <h1 className="text-3xl font-bold underline">{data.shoppingList.item}</h1>
     <p>メーカー名:{data.shoppingList.maker}</p>
     <p>価格:{data.shoppingList.price}</p>
     </>
     );
    }