export default function LinkComponent({ href, textLink }) {
  return (
    <Link href={href} passHref>
      <a>{textLink}</a>
    </Link>
  );
}
