export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <h1>Logo</h1>
      </div>
      <main>{children}</main>
    </>
  )
}
