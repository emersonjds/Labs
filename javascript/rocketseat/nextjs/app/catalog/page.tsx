export default async function Catalog() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div>
      <h1>Catalog</h1>
    </div>
  );
}
