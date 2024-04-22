import Image from "next/image";
export default function Custom404() {
  return (
    <div className="bg-tertiary flex my-16 p-6 m-auto w-1/2 rounded-xl bs1-own shadow-own-1 ">
      <Image
        src={"/hades.webp"}
        width={300}
        height={300}
        style={{ objectFit: "contain" }}
        alt={"Image erreur 404"}
      />
      <div className="flex flex-col justify-center m-auto">
        <p className="text-center text-3xl font-nunito text-primary">404</p>
        <br />
        <p className="text-center text-3xl font-nunito text-primary">-</p>
        <br />
        <p className="text-center text-3xl font-nunito text-primary">
          Get the{" "}
        </p>
        <br />
        <p className="text-center text-8xl font-nunito font-bold text-primary">
          HELL
        </p>
        <br />
        <p className="text-center text-3xl font-nunito text-primary">
          out of here!
        </p>
        <br />
        <p className="text-center text-2xl"> 🔥 🔥 🔥</p>
        <br />
        <p className="text-center text-sm font-nunito text-primary">
          ... ahah ...
        </p>
      </div>
    </div>
  );
}
