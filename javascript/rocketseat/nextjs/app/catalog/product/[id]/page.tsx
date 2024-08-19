import ButtonAddToCart from "../components/buttonAddToCart";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product({ params }: ProductProps) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // this property dont exist in the interface cause data it's loaded in the getServerSideProps
  console.log(params);

  const { id } = params;

  return (
    <div>
      <h1>Product {id}</h1>
      <ButtonAddToCart />
    </div>
  );
}
