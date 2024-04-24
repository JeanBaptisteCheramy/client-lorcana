import Link from "next/link";

type LineProps = {
  name: string;
  url: string;
};

export default function Line(props: LineProps) {
  return (
    <li className="text-xl font-nunito font-bold text-tertiary">
      <Link href={`/${props.url}`}>{props.name}</Link>
    </li>
  );
}
