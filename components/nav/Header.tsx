import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/public/assets/assets";
import { Button } from "../ui/button";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full border-b flex p-5 justify-between ">
      <div className="pl-10">
        <Link href="/">
          <Image src={assets.logo} alt="logo" width={128} height={38} />
        </Link>
      </div>
      <div className="flex justify-end">
        <Button
          variant="default"
          size="lg"
          className="flex items-center px-6 bg-blue-600 hover:bg-blue-800"
        >
          Login
        </Button>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
