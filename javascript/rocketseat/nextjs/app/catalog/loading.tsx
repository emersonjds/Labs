export default async function CatalogLoading() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return <h1>Loading data of catalog...</h1>;
}
