"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {navbarLinks} from "@/constants/index"

export default function Navbar() {
  const [active, setActive] = useState();
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Event for Navbar Style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold for scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll to Section
  const handleScrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out border border-b`}
    >
      <nav className="mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left: Logo/Name */}
        <Link
          href='/'
          className="cursor-pointer text-xl font-light text-gray-800 transition"
        >
          Gaurav Nardia
        </Link>

        {/* Middle: Navigation Links */}
        {/* <ul className="hidden md:flex space-x-20 font-medium text-lg">
          {navbarLinks.map((item) => (
            <Link
              key={item.id}
              href={`${item.route}`}
              className={`cursor-pointer capitalize transition-colors font-regular duration-300 text-gray-600 hover:text-gray-300 ${
                active === item ? "text-gray-600" : ""
              }`}
            >
              {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            </Link>
          ))}
        </ul> */}

        {/* Right: Request Button */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdKHR7eFRucYj7QqzezKOWCxyfkALlxAeaQ-YrGVhVJnLkP4g/viewform?usp=dialog"
          target="_blank"
          className="px-2 flex font-light items-center py-2 text-blue-500 hover:bg-gray-200 hover:rounded-lg  transition duration-300"
        >
          Project request<ChevronRight/>
        </Link>
      </nav>
    </header>
  );
}
