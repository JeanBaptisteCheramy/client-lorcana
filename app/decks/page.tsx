"use client";
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
    <div className='grid grid-cols-3 gap-10'>
      {decks.decks.map((item: any, i: number) => (
        <DeckCard key={i} deck={item} />
      ))}
    </div>
  );
}
