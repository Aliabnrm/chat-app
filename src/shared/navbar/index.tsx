"use client";
import Link from "next/link";
import { useLogout } from "@/src/hooks/useLogout";

type Props = {
  userEmail: string;
};

const MainNavbar = ({ userEmail }: Props) => {
  const { logout } = useLogout();

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      <Link href="/" className="text-xl font-bold text-gray-800">
        Home
      </Link>
      <div className="flex items-center gap-4">
        {userEmail && <span className="text-gray-600">👋 {userEmail}</span>}
        <button
          onClick={logout}
          className="rounded-md bg-red-500 px-4 py-2 text-white text-sm hover:bg-red-600"
        >
          خروج
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
