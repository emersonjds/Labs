interface ProductProps {
    params: {
        id: string;
    }
}

export default function Product({params}: ProductProps) {

    // this property dont exist in the interface cause data it's loaded in the getServerSideProps
    console.log(params);

    return (
        <div>
            <h1>Product {params.id}</h1>
        </div>
    )
}