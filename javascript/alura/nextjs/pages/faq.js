import Link from "./src/components/Link";

export default function FaqPage() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Here is the FAQ page</p>
      <Link href="/" passHref>
        <a>Go to Home</a>
      </Link>
    </div>
  );
}
