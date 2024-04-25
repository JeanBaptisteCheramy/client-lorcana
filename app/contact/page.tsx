import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex justify-center items-center w-full h-90vh ">
      <Link
        href={"mailto:cheramyjb@gmail.com"}
        className="h-32 flex items-center text-4xl duration-200 text-tertiary bg-fourth hover:text-fourth hover:bg-tertiary shadow-md rounded-3xl p-8"
      >
        Click to contact me.
      </Link>
    </section>
  );
}
