export default async function LowerComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1> Now you see the Lower Component</h1>
    </div>
  )
}