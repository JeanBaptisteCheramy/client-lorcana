import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useOneDeckStore = create(
  persist(
    (set) => ({
      decks: null,
      setOneDeck: async (id:number) => {
        try {
          const response = await fetch(`http://localhost:3333/api/public/decks/${id}`);
          const deckData = await response.json();
          set({ deck: deckData });
        } catch (error) {
          console.error("Error fetching deck data:", error);
        }
      },
    }),
    {
      name: "deck-store", 
    }
  )
);