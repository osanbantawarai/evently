"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { assets } from "@/public/assets/assets";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "./NavBar";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [activeButton, setActiveButton] = useState("");

  const navButtons = [
    { label: "Home", path: "/" },
    { label: "Create Event", path: "/events/create" },
    { label: "My Profile", path: "/events/profile" },
  ];

  useEffect(() => {
    const currentNav = navButtons.find((item) => item.path == pathName);
    if (currentNav) setActiveButton(currentNav.label), [pathName];
  });

  const handleClick = (label: string, path: string) => {
    setActiveButton(label);
    router.push(path);
  };
  return (
    <header className="sticky bg-white z-50 top-0 w-full border-b flex justify-between items-center pt-3 pb-3 sm:pt-5 sm:pb-5">
      <div className="pl-10 sm:pl-30">
        <Link href="/">
          <Image src={assets.logo} alt="logo" width={128} height={38} />
        </Link>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-10 mr-20 font-medium">
        {navButtons.map((item) => (
          <button
            onClick={() => handleClick(item.label, item.path)}
            key={item.label}
            className={`hover:text-[#634CF5] transition-colors duration-300 cursor-pointer ${
              activeButton === item.label ? "text-[#634CF5]" : ""
            }`}
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
