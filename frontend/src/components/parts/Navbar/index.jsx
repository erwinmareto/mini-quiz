"use client";
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
    <nav className="flex justify-between items-center bg-blue-700 p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <h1 className="text-xl text-white font-bold">Logo</h1>
        </Link>
        <Link href="/add/quiz" className="text-white hover:underline">
          Add Quiz
        </Link>
        <Link href="/leaderboards/1" className="text-white hover:underline">
          Leaderboards
        </Link>
      </div>
      {token ? (
        <button
          onClick={logout}
          className="text-white hover:underline cursor-pointer"
        >
          Log Out
        </button>
      ) : (
        <Link href="/auth/login" className="text-white hover:underline">
          Log In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
