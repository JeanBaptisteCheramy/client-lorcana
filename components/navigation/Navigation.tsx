import { slugify } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Line from "../Line";

export default function Navigation() {
  const navLinks = ["Cards", "Decks", "Contact"];

  return (
    <nav className="width-screen h-10vh bg-secondary flex justify-between items-center px-16">
      <Link href="/" className="flex">
        <Image
          src="/logo.png"
          width={200}
          height={200}

          alt="Picture of the author"
          className="h-42 object-contain"
        />
      </Link>

      <ul className="flex justify-evenly items-center w-1/2">
        {navLinks.map((link, i) => (
          <Line key={i} name={link} url={slugify(link)} />
        ))}
      </ul>
      <Button
        width={"1/4"}
        text={"Account"}
        icon={"material-symbols-outlined"}
        iconInSpan={"person"}
      />
    </nav>
  );
}
