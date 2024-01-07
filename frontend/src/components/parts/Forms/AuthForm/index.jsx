"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, register } from "@/fetcher/auth";

const AuthForm = ({ isRegister }) => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    if (isRegister) {
      await register(payload);
    }
    await login(payload);
    router.push("/");
  };
  return (
    <>
      <h1 className="text-4xl">{isRegister ? "Register" : "Login"}</h1>
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="rounded-md border border-slate-500 focus:bg-blue-200"
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="rounded-md border border-slate-500 focus:bg-blue-200"
          type="text"
          name="password"
          id="password"
        />
        <button className="bg-indigo-500 px-5 py-2 rounded-lg" type="submit">
          Submit
        </button>
      </form>
      <Link
        className="underline"
        href={isRegister ? "/auth/login" : "/auth/register"}
      >
        {isRegister ? "Login" : "Register"}
      </Link>
    </>
  );
};

export default AuthForm;
