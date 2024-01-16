import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Link href="/faq">
        <a>Go to FAQ page</a>
      </Link>
    </>
  );
}
