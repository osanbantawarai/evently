"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NavItems = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [activeButton, setActiveButton] = useState("");
  const navButtons = [
    { label: "Home", path: "/" },
    { label: "Create Event", path: "/events/create" },
    { label: "My Profile", path: "/events/profile" },
  ];
  useEffect(() => {
    const currentNav = navButtons.find((item) => item.path === pathName);
    if (currentNav) setActiveButton(currentNav.label);
  }, [pathName]);
  const handleClick = (label: string, path: string) => {
    setActiveButton(label);
    router.push(path);
  };
  return (
    <div className="flex flex-col items-start ml-5 gap-3 font-medium">
      {navButtons.map((item) => (
        <button
          onClick={() => handleClick(item.label, item.path)}
          key={item.label}
          className={`hover:text-[#634CF5] transition-colors duration-300 ${
            activeButton == item.label ? "text-[#634CF5]" : ""
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavItems;
