type AuthProps = {
  type: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  password_confirmation?: string;
};

export default function AuthForm(props: AuthProps) {
  const inputStyle = "m-auto focus:outline-none focus:ring-2 ring-tertiary rounded-md p-2 w-5/6 placeholder:text-center placeholder:italic placeholder:opacity-60";

  return (
    <form
      className={`${props.type === "register" ? "bg-secondary rounded-l-2xl" : "bg-tertiary rounded-r-2xl"} flex flex-col gap-8 py-4`}
    >
      <input
        type="text"
        name="email"
        placeholder="Email"
        className={inputStyle}
      />
      {props.type === "register" && (
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          className={inputStyle}
        />
      )}
      {props.type === "register" && (
        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          className={inputStyle}
        />
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={inputStyle}
      />
      {props.type === "register" && (
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm password"
          className={inputStyle}
        />
      )}
      <button
        type="submit"
        className={
          props.type === "register"
            ? "bg-tertiary text-primary rounded-md w-1/2 m-auto h-12 shadow-own-1"
            : "text-tertiary bg-secondary rounded-md w-1/2 m-auto h-12 shadow-own-1"
        }
      >
        {props.type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
