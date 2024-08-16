'use client';
interface ProductProps {
    params: {
        id: string;
    }
}

export default function Product({params}: ProductProps) {

    // this property dont exist in the interface cause data it's loaded in the getServerSideProps
    console.log(params);
    
    const {id} = params;

    function addToCart() {
        console.log('Add to cart');
    }

    return (
        <div>
            <h1>Product {id}</h1>
            <button onClick={addToCart}>Adicionar ao carrinho </button>
        </div>
    )
}