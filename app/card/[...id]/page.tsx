"use client";
import { dataItem } from "@/types/type";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCardStore } from "../../../store/dataAPI";

export default function Page() {
  const { cards, setCards } = useCardStore();
  const pathName = usePathname();
  const id = Number(pathName.slice(6));
  const card = cards?.filter((card: dataItem) => card.id === id);

  const dataStyle = "text-tertiary font-bold p-2";
  const infoStyle = "text-dark-secondary font-bold uppercase p-2";

  useEffect(() => {
    setCards();
  }, []);

  return (
    <div className="py-4 m-auto grid grid-cols-2 gap-6">
      <h3
        className={`py-1 m-auto font-nunito text-3xl font-bold text-tertiary col-span-2`}
      >
        {card[0].name}
      </h3>
      <div className="grid grid-cols-2 shadow-own-1 bg-fourth rounded-3xl space-x-6 space-y-2">
        <h3
          className={`py-4 border-b-2 border-dark-secondary rounded-t-3xl flex justify-center items-center font-nunito font-bold w-full text-lg  bg-light-grey text-tertiary col-span-2`}
        >
          INFORMATIONS
        </h3>
        <p className={infoStyle}>SET</p>
        <p className={dataStyle}>{card[0].setName}</p>
        <p className={infoStyle}>TYPE</p>
        <p className={dataStyle}>{card[0].type}</p>
        <p className={infoStyle}>COLOR</p>
        <div className="flex justify-start items-center gap-2">
          <Image
            src={`/${card[0].color.toLowerCase()}.png`}
            width={20}
            height={20}
            style={{ objectFit: "contain" }}
            alt=""
            className="object-cover"
          />
          <p className={dataStyle}>{card[0].color}</p>
        </div>
        <p className={infoStyle}>RARITY</p>
        <p className={dataStyle}>{card[0].rarity}</p>
        <p className={infoStyle}>ARTIST</p>
        <p className={dataStyle}>{card[0].artist}</p>
      </div>

      <Image
        src={card[0].image}
        width={400}
        height={400}
        alt={`Image of ${card && card[0].name}`}
        className="rounded-3xl row-span-2 shadow-own-1 m-auto"
      />
      <div className="grid grid-cols-2 shadow-own-1 bg-fourth rounded-3xl space-x-6 space-y-2">
        <h3
          className={`py-4 border-b-2 border-dark-secondary rounded-t-3xl flex justify-center items-center font-nunito font-bold w-full text-lg bg-light-grey text-tertiary col-span-2`}
        >
          SPECIFICATIONS
        </h3>
        {card[0].classifications && (
          <>
            <p className={infoStyle}>CLASSIFICATION</p>
            <p className={dataStyle}>{card[0].classifications}</p>
          </>
        )}
        <p className={infoStyle}>INKABLE</p>
        <p className={dataStyle}>{card[0].inkable ? "Yes" : "No"}</p>
        <p className={infoStyle}>ink</p>
        <p className={dataStyle}>{card[0].cost}</p>
        {card[0].lore && (
          <>
            <p className={infoStyle}>Lore</p>
            <p className={dataStyle}>{card[0].lore}</p>
          </>
        )}
        {card[0].strength && (
          <>
            <p className={infoStyle}>STRENGTH</p>
            <p className={dataStyle}>{card[0].strength}</p>
          </>
        )}
        {card[0].willpower && (
          <>
            <p className={infoStyle}>WILL POWER</p>
            <p className={dataStyle}>{card[0].willpower}</p>
          </>
        )}
      </div>
    </div>
  );
}
