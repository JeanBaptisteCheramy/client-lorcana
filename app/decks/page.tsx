"use client";
import { useDecksStore } from "@/store/dataAPI";
import { useEffect } from "react";

export default function Page() {
  const { decks, setDecks } = useDecksStore();
  useEffect(() => {
    setDecks();
  }, []);
  console.log(decks);

  return <p>{decks[0].name}</p>;
}
