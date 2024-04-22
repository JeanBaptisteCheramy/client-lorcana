import dataItem from "@/types/type";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Label from "./Label";

type SearchProps = {
  labelText: string;
  id: string;
  name: string;
  textColor: string;
  placeHolder: string;
  data: dataItem[];
};

export default function SearchBar(props: SearchProps) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState(Array<dataItem>);
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const equals = props.data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    if (input === "") {
      setSearchList([]);
    } else {
      setSearchList(equals);
    }
  }

  return (
    <>
      <Label text={props.labelText} color={props.textColor} />
      <input
        className="rounded-md p-2 w-3/4 placeholder:text-center placeholder:italic placeholder:opacity-60"
        placeholder={props.placeHolder}
        type="search"
        autoComplete="off"
        id={props.id}
        name={props.name}
        value={input}
        onChange={handleInput}
      />
      {input && (
        <ul className="w-3/4 rounded bg-primary">
          {searchList.map((item: dataItem, i: number) => (
            <li
              key={i}
              onClick={() => router.push(`/card/${item.id}`)}
              className="text-sm p-2 duration-75 hover:bg-light-grey cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
