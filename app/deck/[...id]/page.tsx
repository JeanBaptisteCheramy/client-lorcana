/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Aside from "@/components/Aside";
import Label from "@/components/Label";
import { useOneDeckStore } from "@/store/dataAPI";
import { dataItem } from "@/types/type";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const pathName = usePathname();
  const id = Number(pathName.slice(6));
  const { deck, setOneDeck } = useOneDeckStore();
  const router = useRouter();

  useEffect(() => {
    setOneDeck(id);
  }, []);

  console.log(deck);

  return (
    <>
      <Aside>
        <Label text={deck.name.toUpperCase()} color={"tertiary"} />
      </Aside>
      <section className="h-90vh p-6 overflow-scroll m-auto gap-y-6 grid grid-cols-4 w-4/5 justify-evenly">
        {deck.cards.map((card: dataItem, i: number) => (
          <Image
            key={i}
            src={card.image}
            width={200}
            height={200}
            alt={`Image of the card ${card.name}`}
            onClick={() => router.push(`/card/${card.id}`)}
            className="rounded-xl m-auto bs1-own cursor-pointer hover:scale-own-102 duration-300 shadow-own-1 "
          />
        ))}
      </section>
    </>
  );
}
