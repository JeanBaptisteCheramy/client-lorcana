"use client";
import Aside from "@/components/Aside";
import DeckCard from "@/components/DeckCard";
import { useDecksStore } from "@/store/dataAPI";
import { useEffect } from "react";

export default function Page() {
  const { decks, setDecks } = useDecksStore();
  useEffect(() => {
    setDecks();
  }, []);
  console.log(decks);

  return (
    <>
      <Aside>salut</Aside>
      <div className="h-90vh px-6 overflow-scroll m-auto grid grid-cols-3 w-4/5">
        {decks.decks.map((item: any, i: number) => (
          <DeckCard key={i} deck={item} />
        ))}
      </div>
    </>
  );
}
