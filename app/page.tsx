"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-fourth h-90vh w-full ">
      <div className="shadow-own-1 w-11/12 m-auto grid gap-4 p-12 grid-cols-8 grid-rows-4 h-80vh my-6 bg-back3 bg-cover rounded-2xl">
        <div className="shadow-own-1 p-4 col-span-5 row-span-4 bg-main bg-center bg-cover bg-no-repeat rounded-2xl flex flex-col justify-between gap-2">
          <div className="flex flex-col justify-center w-fit rounded-2xl p-4 mx-auto bg-black/60">
            <p className="text-primary text-center text-2xl">
              Welcome to our Lorcana cards index.
            </p>
            <p className="text-primary text-center text-2xl">
              Join us for free and build your own collection!
            </p>
          </div>
          <Link
            href={"/register"}
            className="shadow-own-1 w-1/3 h-1/4 font-nunito font-bold text-2xl mx-auto  px-2 flex items-center justify-evenly border-2 rounded-2xl duration-100 text-tertiary border-none bg-secondary hover:text-primary hover:bg-tertiary"
          >
            REGISTER
          </Link>
        </div>
        <div className=" flex flex-col justify-end bg-cards bg-no-repeat bg-contain bg-center  col-span-3 row-span-2">
          <Link
            href={"/cards"}
            className=" shadow-own-1 w-1/3 h-1/4 font-nunito font-bold text-2xl px-2 flex items-center justify-evenly border-2 rounded-2xl duration-100 text-primary border-none bg-tertiary hover:text-tertiary hover:bg-secondary"
          >
            CARDS
          </Link>
        </div>
        <div className=" flex flex-col justify-start items-end bg-decks bg-no-repeat bg-contain bg-center col-span-3 row-span-2">
          <Link
            href={"/decks"}
            className=" w-1/3 h-1/4 font-nunito font-bold text-2xl px-2 flex items-center justify-evenly shadow-own-1 border-2 rounded-2xl duration-100 text-primary border-none bg-tertiary hover:text-tertiary hover:bg-secondary"
          >
            DECKS
          </Link>
        </div>
      </div>
    </section>
  );
}
