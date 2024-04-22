import { dataItem } from "@/types/type";
import Image from "next/image";
import router from "next/router";

type DeckCardProps = {
  deck: { name: string; cards: Array<{ cards: dataItem }> };
};

export default function DeckCard({ deck }: DeckCardProps) {
  console.log(deck);
  return (
    <div className="w-full p-2 flex flex-col items-center gap-4">
      <h3>{deck.name}</h3>
      <div className="w-own-300 h-96 z-50 relative flex flex-col justify-center">
        <div className="w-own-300 h-96 rotate-m-4 z-30 bg-back2 absolute bg-no-repeat bg-contain"></div>
        <div className="w-own-300 h-96 rotate-m-8 z-20 bg-back2 absolute bg-no-repeat bg-contain"></div>
        <div className="w-own-300 h-96 rotate-m-12 z-10 bg-back2 absolute bg-no-repeat bg-contain"></div>
        <Image
          src={deck.cards[Math.floor(Math.random() * deck.cards.length)].image}
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
          alt={`Image of ${deck.name}`}
          onClick={() => router.push(`/deck/${deck.id}`)}
          className="w-full scale-90 z-50 left-3 absolute rounded-xl bs1-own cursor-pointer duration-300 "
        />
      </div>
    </div>
  );
}
