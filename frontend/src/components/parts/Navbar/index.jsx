'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Navbar = ({ token }) => {
  const router = useRouter();
  const logout = () => {
    deleteCookie("id");
    deleteCookie("username");
    deleteCookie("token");
    router.push("/auth/login");
  };
  return (
    <nav className="flex justify-between bg-blue-500 p-5">
      <div className="flex gap-5">
        <Link href="/">
          <h1 className="text-xl">Logo</h1>
        </Link>
        <Link href="/add/quiz">
          <h1>Add Quiz</h1>
        </Link>
        <Link href="/leaderboards/1">
          <h1>Leaderboards</h1>
        </Link>
      </div>
      {token ? (
        <button onClick={logout}>
          <h1>Log Out</h1>
        </button>
      ) : (
        <Link href="/auth/login">
          <h1>Log In</h1>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
