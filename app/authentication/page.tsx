import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <section className="w-full py-12 ">
      <div className="grid grid-cols-2 w-2/3 m-auto shadow-own-1 rounded-2xl">
        <AuthForm type="register" />
        <AuthForm type="login" />
      </div>
    </section>
  );
}
