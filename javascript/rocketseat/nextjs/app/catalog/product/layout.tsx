export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <h1>Area de produtos</h1>
      </div>
      <main>{children}</main>
    </>
  )
}
