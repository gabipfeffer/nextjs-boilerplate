"use client";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div
      className={
        "bg-gray-400 h-screen flex flex-col items-center justify-center text-center"
      }
    >
      <ArrowRightOnRectangleIcon className={"w-10 h-10 text-white"} />
      <button
        className={"text-white font-bold text-2xl animate-pulse cursor-pointer"}
        onClick={() => signIn("google")}
      >
        Sign In with Google
      </button>
    </div>
  );
}
