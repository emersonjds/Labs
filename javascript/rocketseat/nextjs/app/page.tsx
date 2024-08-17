export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('https://api.github.com/users/emersonjds');
  const data = await response.json();
  return (
    <h1>
      {data.name} - {data.bio}
    </h1>
  );
}
