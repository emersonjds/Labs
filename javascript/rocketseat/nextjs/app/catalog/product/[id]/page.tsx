interface ProductProps {
    params: {
        id: string;
    }
}

export default function Product({params}: ProductProps) {

    console.log(params);

    return (
        <div>
            <h1>Product {params.id}</h1>
        </div>
    )
}