export default async function TestComponent() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  )
}