import Link from "next/link";

type ButtonProps = {
  text?: string;
  icon?: string;
  iconInSpan?: string;
  width?: string;
  href:string
};

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className={`${props.width} m-auto h-12 min-w-32 px-4 flex items-center justify-center gap-2 border-2 rounded-full duration-100 text-tertiary border-tertiary bg-primary hover:bg-tertiary hover:text-primary`}
    >
      {props.icon && <span className={props.icon}>{props.iconInSpan}</span>}
      <span className="font-nunito font-bold">{props.text}</span>
    </Link>
  );
}
