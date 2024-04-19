"use client";
import dataItem from "@/types/type";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCardStore } from "../../../store/dataAPI";

export default function Page() {
  const { cards, setCards } = useCardStore();
  const pathName = usePathname();
  const id = Number(pathName.slice(6));
  const card = cards?.filter((card: dataItem) => card.id === id);

  useEffect(() => {
    setCards();
  }, []);

  return (
    <>
      <h3>{card && card[0].name}</h3>
      <Image
        src={card && card[0].image}
        width={400}
        height={400}
        alt={`Image of ${card && card[0].name}`}
      />
    </>
  );
}
