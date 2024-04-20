"use client";
import GameCard from "@/components/GameCard";
import Label from "@/components/Label";
import { useCardStore } from "@/store/dataAPI";
import dataItem from "@/types/type";
import { slugify } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const { cards, setCards } = useCardStore();
  const typeOptions: string[] = ["All"];
  const colorOptions: string[] = [];
  const costs: number[] = [];
  let [filteredCards, setFilteredCards] = useState(cards);

  cards?.forEach((card: dataItem) => {
    if (!typeOptions.includes(card.type)) typeOptions.push(card.type);
    if (!colorOptions.includes(card.color)) colorOptions.push(card.color);
    if (!costs.includes(card.cost)) {
      costs.push(card.cost);
    }
  });
  costs.sort((a, b) => a - b);

  function handleSelect(event: any) {
    if (event.target.value === "All") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((item: dataItem) => item.type === event.target.value)
      );
    }
  }
  function handleColor(option: string) {
    setFilteredCards(cards.filter((item: dataItem) => item.color === option));
  }
  function handleCost(cost: number) {
    setFilteredCards(cards.filter((card: dataItem) => card.cost === cost));
  }

  useEffect(() => {
    setCards();
  }, []);
  // console.log(cards[54]);

  return (
    <>
      <aside className="w-1/6 bg-fourth py-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full flex flex-col items-center">
            <Label text={'Type'} color={'tertiary'}/>
            <select
              id="type"
              onChange={handleSelect}
              className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 "
            >
              {typeOptions.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col items-center">
            <Label text={"Color"} color={'tertiary'} />
            <div className="grid grid-cols-3 gap-3 ">
              {colorOptions.map((option, i) => (
                <Image
                  key={i}
                  src={`/${slugify(option)}.png`}
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                  alt={`Image of color ${option}`}
                  onClick={() => handleColor(option)}
                />
              ))}
            </div>
          </div>
          <div className="w-5/6 flex flex-col items-center">
              <Label text={'Cost'} color={'tertiary'}/>
            <div className="grid grid-cols-4 items-center gap-2">
              {costs.map((cost, i) => (
                <button
                  key={i}
                  className="bg-primary border-tertiary font-bold text-tertiary p-2 rounded hover:bg-tertiary hover:text-primary duration-100"
                  onClick={() => handleCost(cost)}
                >
                  {cost}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <section className="w-5/6 grid grid-cols-3 justify-items-center	gap-8 p-4">
        {filteredCards.map((item: dataItem, i: number) => (
          <GameCard key={i} card={item} />
        ))}
      </section>
    </>
  );
}
