import { dataItem, deckItem } from "@/types/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type cardStore = {
    cards: dataItem[] | null;
    setCards: () => Promise<void>;
}

export const useCardStore = create(
  persist(
    (set) => ({
      cards: null,
      setCards: async () => {
        try {
          const response = await fetch("http://localhost:3333/api/public/cards");
          const cardsData = await response.json();
          set({ cards: cardsData });
        } catch (error) {
          console.error("Error fetching cards data:", error);
        }
      },
    }),
    {
      name: "card-store", 
    }
  )
);


type decksStore = {
  decks: deckItem[] | null;
  setDecks: (decks: deckItem[]) => void; 
}

export const useDecksStore = create(
  persist(
    (set) => ({
      decks: null,
      setDecks: async () => {
        try {
          const response = await fetch("http://localhost:3333/api/public/decks");
          const decksData = await response.json();
          set({ decks: decksData });
        } catch (error) {
          console.error("Error fetching decks data:", error);
        }
      },
    }),
    {
      name: "decks-store", 
    }
  )
);