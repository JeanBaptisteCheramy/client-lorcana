import GameCard from "@/components/GameCard";
import dataItem from "@/types/type";

async function getData() {
  const response = await fetch("http://localhost:3333/api/public/cards");
  const data = await response.json();

  return data;
}

export default async function Page() {
  const cards = await getData();
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center	gap-8 p-4">
        {cards &&
          cards.map((item: dataItem, i: number) => (
            <GameCard
              key={i}
              card={item}
            />
          ))}
      </div>
    </>
  );
}
