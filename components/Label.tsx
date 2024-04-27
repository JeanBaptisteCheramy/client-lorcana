type LabelProps = {
  text: string
  color:string
  class?:string
};
export default function Label(props: LabelProps) {
  return <label className={`py-2 font-nunito font-bold text-${props.color} ${props.class}`}>{props.text}</label>;
}
