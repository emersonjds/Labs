interface ProductProps {
  params: {
      data: string[];
  }
}

export default function ProductDetails(
  props: ProductProps
) {
  const [id, size, color] = props.params.data;

  return (
      <div>
          <h1>Product ID {id}</h1>
          <h1>Product Size {size}</h1>
          <h1>Product Color {color}</h1>
      </div>
  )
}