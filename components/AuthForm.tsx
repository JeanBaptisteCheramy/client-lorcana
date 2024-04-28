import { postLogin, postRegister } from "@/helper/backend_helper";
import Label from "./Label";
import { useErrorStore } from "@/store/error";
type AuthProps = {
  type: string;
};

export default function AuthForm(props: AuthProps) {
  const inputStyle =
    " m-auto focus:outline-none focus:ring-2 ring-tertiary rounded-md p-2 w-5/6 placeholder:text-center placeholder:italic placeholder:opacity-60";

  const register = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData);
    postRegister(data);
  };
  const login = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData);
    postLogin(data);
  };


  return (
    <form
      className="bg-secondary p-8 rounded-2xl flex flex-col gap-8 justify-between py-4"
      action={props.type === "register" ? register : login}
    >
      <div className="grid grid-cols-own-auth gap-4 ">
        <Label text="Email" color="tertiary" />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={inputStyle}
        />
        {props.type === "register" && (
          <>
            <Label text="First Name" color="tertiary" />
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              className={inputStyle}
            />
          </>
        )}
        {props.type === "register" && (
          <>
            <Label text="Last Name" color="tertiary" />
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              className={inputStyle}
            />
          </>
        )}
        <Label text="Password" color="tertiary" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={inputStyle}
        />
        {props.type === "register" && (
          <>
            <Label text="Password Confirmation" color="tertiary" />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm password"
              className={inputStyle}
            />
          </>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-dark-secondary text-primary hover:bg-tertiary hover:text-secondary rounded-md w-1/2 m-auto h-12 shadow-own-1"
        >
          {props.type === "login" ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
}
