import { ChangeEvent, useState } from "react";
import Label from "./Label";

type SearchProps = {
  labelText: string;
  id: string;
  name: string;
  buttonText: string;
  textColor: string;
  bgColor: string;
};

export default function SearchBar(props: SearchProps) {
  const [input, setInput] = useState("");
  return (
    <>
      <Label text={props.labelText} color={props.textColor} />
      <input
        type="search"
        id={props.id}
        name={props.name}
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button
        className={`text-${props.textColor} bg-${props.bgColor} font-bold rounded-md px-2 border-2 border-${props.textColor}`}
      >
        {props.buttonText}
      </button>
    </>
  );
}
