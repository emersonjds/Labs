'use client';
interface ProductProps {
  params: {
      data: string[];
  }
}

export default function ProductDetails({params}: ProductProps) {
  const [id, size, color] = params.data;

  console.log(params);

  function addToCart() {
    console.log('Add to cart');
  }

  return (
      <div>
          <h1>Product ID {id}</h1>
          <h1>Product Size {size}</h1>
          <h1>Product Color {color}</h1>
          <button onClick={addToCart}>Add to cart</button>
      </div>
  )
}