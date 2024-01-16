import LinkComponent from "./src/components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <LinkComponent href="/faq" textLink="Go to FAQ" />
    </>
  );
}
