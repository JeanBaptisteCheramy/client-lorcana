import { POST } from "@/helper/api_helper";
import { BASE_URL, LOGIN_URL, REGISTER_URL } from "@/helper/url_helper";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import Label from "./Label";
type AuthProps = {
  type: string;
};

export default function AuthForm(props: AuthProps) {
  const [error, setError] = useState<string | null>(null);
  const { user, setUser } = useUserStore();
  const inputStyle =
    " m-auto focus:outline-none focus:ring-2 ring-tertiary rounded-md p-2 w-5/6 placeholder:text-center placeholder:italic placeholder:opacity-60";

  const register = async (formData: FormData) => {
    try {
      const data = Object.fromEntries(formData);
      await POST(BASE_URL + REGISTER_URL, data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const login = async (formData: FormData) => {
    try {
      const data = Object.fromEntries(formData);
      const logingUser = await POST(BASE_URL + LOGIN_URL, data);
      setUser(logingUser);

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
      {error === "E_VALIDATION_ERROR" && (
        <p className="text-red-700 text-center text-lg">
          Some fields are not correctly filled.
        </p>
      )}
      {error === "23505" && (
        <p className="text-red-700 text-center text-lg">
          An account is already registered with the email you provided
        </p>
      )}
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
