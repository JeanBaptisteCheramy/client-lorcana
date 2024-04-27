import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <section className="w-full py-12 ">
      <div className="w-1/2 m-auto shadow-own-1 rounded-2xl">
        <AuthForm type="login" />
      </div>
    </section>
  );
}
