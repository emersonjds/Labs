import NextLink from "next/link";
import LinkEstilizado from "../LinkEstilizado";

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkEstilizado {...props}>{children}</LinkEstilizado>
    </NextLink>
  );
}
