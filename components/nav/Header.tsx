import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/public/assets/assets";
import NavBar from "./NavBar";

const Header = () => {
  const navButtons = [
    { label: "Home" },
    { label: "Create Event" },
    { label: "My Profile" },
  ];
  return (
    <header className="w-full border-b flex justify-between items-center p-5">
      <div className="pl-10">
        <Link href="/">
          <Image src={assets.logo} alt="logo" width={128} height={38} />
        </Link>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-10 mr-20 font-medium">
        {navButtons.map((item) => (
          <button
            key={item.label}
            className="hover:text-[#634CF5] transition-colors duration-300 cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
