import Link from "./src/components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Link href="/faq" passHref>
        <a>Go to FAQ</a>
      </Link>
    </>
  );
}
