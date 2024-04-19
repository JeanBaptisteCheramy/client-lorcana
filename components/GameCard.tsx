"use client";
import { slugify } from "@/utils/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GameCard({ card }: any) {
  const router = useRouter();
  return (
    <div className="w-full p-2 flex flex-col items-center gap-4">
      <h3>{card.name}</h3>
      <Image
        src={card.image}
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
        alt={card.name}
        onClick={() => router.push(`/card/${card.id}`)}
        className="cursor-pointer hover:scale-105"
      />
      <div className="colors">
        <Image
          src={`/${slugify(card.color)}.png`}
          width={25}
          height={25}
          style={{ objectFit: "contain" }}
          alt={`Image of color ${card.color}`}
        />
      </div>
    </div>
  );
}
