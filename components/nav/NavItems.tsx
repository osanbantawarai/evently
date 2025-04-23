import React from "react";

const NavItems = () => {
  const navButtons = [
    { label: "Home" },
    { label: "Create Event" },
    { label: "My Profile" },
  ];
  return (
    <div className="flex flex-col items-start ml-5 gap-3 font-medium">
      {navButtons.map((item) => (
        <button
          key={item.label}
          className="hover:text-[#634CF5] transition-colors duration-300"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavItems;
