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
    { name: "Docs", href: "/docs" },
    { name: "Courses", href: "/courses" },
  ];

  return (
    <>
      <header className="dark:bg-[#111111] bg-[#F8F8F8] dark:text-[#FFFFFF] text-[#000000] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo or Brand Name */}
          <Link href="/">
            <img
              src="/BrandIcon.png"
              alt="logo"
              height={"100px"}
              width={"150px"}
              className="mb-3"
            />{" "}
          </Link>
          {/* Theme Toggle */}
          <div className="md:hidden block">
            <ToggleTheme />
          </div>
          {/* Mobile Menu Icon - Visible only on small screens */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="dark:text-[#FFFFFF] dark:hover:text-[#CCCCCC] focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Desktop Navigation Links - Visible on md and larger screens */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold">
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
        } m-2 fixed top-15 left-0 right-0 `}
      >
        <nav className="flex flex-col font-semibold gap-4 text-xl py-4  items-center dark:bg-[#1A1A1A] dark:shadow-[#FFFFFF1A] shadow-[#0000001A] bg-[#FFFFFF] dark:text-[#FFFFFF] text-[#000000] rounded-2xl border-2 border-[#DDDDDD] dark:border-[#333333]">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-gray-300 ">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
