"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";


export default function Navbar() {

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out border border-b`}
    >
      <nav className="mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left: Logo/Name */}
        <Link
          href='/'
          className="cursor-pointer font-semibold text-xl font-light text-gray-800 transition"
        >
          Gaurav Nardia
        </Link>

        {/* Right: Request Button */}
        <Link
          href="#"
          target="_blank"
          className="px-2 font-semibold flex font-light items-center py-2 text-blue-500 hover:bg-gray-200 hover:rounded-lg  transition duration-300"
        >
          Project request<ChevronRight/>
        </Link>
      </nav>
    </header>
  );
}
