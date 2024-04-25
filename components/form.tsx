type FormProps = {
   
}
export default function form({children}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <form>
      {children}
    </form>
  )
}