"use client";
import { useUserStore } from "@/store/userStore";

export default function Page() {
  const { user } = useUserStore();
  console.log(user);

  return <p>{user.firstName}</p>;
}
