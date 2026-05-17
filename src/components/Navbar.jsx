"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur py-5 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" >
          <Image src="/SkilSpher Brand Logo.png" alt="Brand Logo " width={150} height={50} />
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
          {!user && (
            <ul className=" flex items-center text-lg gap-5">
              <li>
                <Link href="/login" className=" py-2 px-6 bg-blue-400 border ">Login</Link>
              </li>
              <li>
                <Link href="/sign-up"> Register</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-5 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} variant="danger" size="sm">
                SignOut
              </Button>
            </div>
          )}
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
