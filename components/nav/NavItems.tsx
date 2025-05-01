"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NavItems = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("Home")
  const navButtons = [
    { label: "Home", path: "/" },
    { label: "Create Event", path: "/events/create" },
    { label: "My Profile", path: "/events/profile" },
  ];
  const handleClick = (label:string, path: string) => {
    setActiveButton(label)
    router.push(path)
  }
  return (
    <div className="flex flex-col items-start ml-5 gap-3 font-medium">
      {navButtons.map((item) => (
        <button
        onClick={()=>handleClick(item.label, item.path)}
          key={item.label}
          className={`hover:text-[#634CF5] transition-colors duration-300 ${activeButton == item.label ? "text-[#634CF5]" : "" }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavItems;
