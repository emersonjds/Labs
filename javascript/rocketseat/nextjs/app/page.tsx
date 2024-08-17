export default async function Home() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('https://api.github.com/users/emersonjds');
  const data = await response.json();

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
