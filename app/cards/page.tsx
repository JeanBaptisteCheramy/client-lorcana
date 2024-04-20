"use client";
import GameCard from "@/components/GameCard";
import { useCardStore } from "@/store/dataAPI";
import dataItem from "@/types/type";
import { useEffect, useState } from "react";

export default function Page() {
  const { cards, setCards } = useCardStore();
  const options: string[] = ["All"];
  let [filteredCards, setFilteredCards] = useState(cards);

  cards?.forEach((card: dataItem) => {
    if (!options.includes(card.type)) options.push(card.type);
  });

  function handleSelect(event: any) {
    if (event.target.value === "All") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((item: dataItem) => item.type === event.target.value)
      );
    }
  }

  useEffect(() => {
    setCards();
  }, []);

  return (
    <>
      <aside className="w-1/6 bg-fourth py-4">
        <div className=" w-full flex flex-col items-center gap-2">
          <label>Type</label>
          <select
            id="type"
            onChange={handleSelect}
            className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 "
          >
            {options.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
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
