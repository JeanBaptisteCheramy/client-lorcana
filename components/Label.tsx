type LabelProps = {
  text: string
  color:string
};
export default function Label(props: LabelProps) {
  return <label className={`py-2 font-nunito font-bold text-${props.color}`}>{props.text}</label>;
}
