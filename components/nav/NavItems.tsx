import React, { useState } from "react";

const NavItems = () => {
  const [activeButton, setActiveButton] = useState("Home")
  const navButtons = [
    { label: "Home" },
    { label: "Create Event" },
    { label: "My Profile" },
  ];
  const handleClick = (label:string) => {
    setActiveButton(label)
  }
  return (
    <div className="flex flex-col items-start ml-5 gap-3 font-medium">
      {navButtons.map((item) => (
        <button
        onClick={()=>handleClick(item.label)}
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
