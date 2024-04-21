import dataItem from "@/types/type";
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


type filteredCardStore = {
  filteredCards: dataItem[] | null;
  filterCards: (filteredCards: dataItem[]) => void; 
}

export const useFilteredCardStore = create<filteredCardStore>((set) => ({
  filteredCards: null,
  filterCards: (filteredCards) => set({ filteredCards }),
}));