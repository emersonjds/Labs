export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <h1>Admin Layout</h1>
      </div>
      <main>{children}</main>
    </>
  )
}
