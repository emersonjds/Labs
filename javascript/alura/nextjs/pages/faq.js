import Link from "next/link";

export default function FaqPage() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Here is the FAQ page</p>
      <Link href="/" passHref>
        <a>Go back home</a>
      </Link>
    </div>
  );
}
