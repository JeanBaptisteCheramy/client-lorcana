'use client'
import { usePathname } from "next/navigation";

export default function page() {
  const pathName = usePathname();
  const id = Number(pathName.slice(6));
  return (
    <div>Deck:{id}</div>
  )
}
