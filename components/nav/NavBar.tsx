import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={assets.menu}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer "
          />
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-6 bg-white">
          <Image src={assets.logo} alt="logo" width={128} height={38} />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBar;
