"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ToggleTheme from "../Utility/ToggleTheme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility on mobile screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define navigation links
  type NavRoute = {
    name: string;
    href: string;
  };
  const navLinks: NavRoute[] = [
    { name: "Courses", href: "/courses" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <>
      <header className="dark:bg-[#1c4463] bg-[#9DB2BF] dark:text-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo or Brand Name */}
          <div className=" flex items-center space-x-2 text-2xl font-bold">
            <img
              src="/BrandIcon.png"
              alt="logo"
              height={"100px"}
              width={"150px"}
            />{" "}
            <span>Docs</span>
          </div>

          {/* Theme Toggle */}
          <div className="md:hidden block">
            <ToggleTheme />
          </div>

          {/* Mobile Menu Icon - Visible only on small screens */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Navigation Links - Visible on md and larger screens */}
          <nav className="hidden md:flex gap-8 text-lg">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <ToggleTheme />
          </div>
        </div>

        {/* Mobile Navigation Links - Visible only when menu is open on mobile */}
      </header>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } pt-10 bg-[#27374D] rounded-2xl w-48  `}
      >
        <nav className="flex flex-col gap-4 text-xl p-4">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-gray-300">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
