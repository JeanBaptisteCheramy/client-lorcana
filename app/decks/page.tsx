"use client";
import Aside from "@/components/Aside";
import DeckCard from "@/components/DeckCard";
import { useDecksStore } from "@/store/dataAPI";
import { dataItem } from "@/types/type";
import { sortDecksByCreation } from "@/utils/utils";
import { ChangeEvent, useEffect, useState } from "react";
import Label from "../../components/Label";

export default function Page() {
  const { decks, setDecks } = useDecksStore();
  const [decksToDisplay, setDecksToDisplay] = useState(decks.decks);

  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    let newDecks;
    switch (event.target.value) {
      case "first":
        newDecks = sortDecksByCreation("asc", decks.decks);
        break;
      case "old":
        newDecks = sortDecksByCreation("desc", decks.decks);
        break;
      default:
        console.log("something went wrong sorting decks.");
    }
    setDecksToDisplay(newDecks);
  }
  useEffect(() => {
    setDecks();
  }, []);

  return (
    <>
      <Aside>
        <Label text={"Filters"} color={"tertiary"} />
        <select
          name="creation-date"
          id="creation-date"
          onChange={handleSelect}
          className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 "
        >
          <option value="first">Most recent</option>
          <option value="old">Oldest</option>
        </select>
      </Aside>
      <div className="h-90vh px-6 overflow-scroll m-auto grid grid-cols-3 w-4/5">
        {decksToDisplay.map((item: any, i: number) => (
          <DeckCard key={i} deck={item} />
        ))}
      </div>
    </>
  );
}
