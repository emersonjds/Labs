interface ProductProps {
    params: {
        id: string;
    }
}

export default function Product(
    props: ProductProps
) {
    return (
        <div>
            <h1>Product {props.params.id}</h1>
        </div>
    )
}