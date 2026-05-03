"use client";

import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          SkillSphere
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-purple-600 transition">
            Home
          </Link>
          <Link
            href={"/all-courses"}
            className="hover:text-purple-600 transition"
          >
            Courses
          </Link>
          <Link href="/profile" className="hover:text-purple-600 transition">
            My Profile
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-1.5 text-sm border border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-1.5 text-sm bg-black text-white rounded-lg hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur shadow-lg md:hidden">
          <div className="px-4 py-5 space-y-4">
            <Link href="/" className="block text-sm">
              Home
            </Link>
            <Link href={"/all-courses"} className="block text-sm">
              Courses
            </Link>
            <Link href="/profile" className="block text-sm">
              My Profile
            </Link>

            {/* Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/login"
                className="w-full text-center px-4 py-2 text-sm border border-black rounded-lg hover:bg-black hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="w-full text-center px-4 py-2 text-sm bg-black text-white rounded-lg hover:opacity-90 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
