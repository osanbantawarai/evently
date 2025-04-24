import { Button } from "@/components/ui/button";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center border-b gap-[10rem] pt-10 pb-10 bg-gray-50">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold ml-80">
            Host, Connect,<br /> Celebrate: Your Events,<br /> Our Platform!
          </h1>
          <p className="text-xl ml-80">
            Book and learn helpful tips from 3,168+ mentors in <br /> world-class
            companies with out global community.
          </p>
          <Button className="max-w-fit ml-80 mr-100 bg-[#3467e6] hover:bg-[#4874e2] transition-colors duration-300 pt-5 pb-5 pl-8 pr-8 rounded-4xl">Explore Now</Button>
        </div>
        <div>
          <Image
            src={assets.hero}
            alt="hero"
            width={350}
            height={350}
            className="max-h-[70vh] object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
