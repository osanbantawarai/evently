import { Button } from "@/components/ui/button";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center sm:items-center sm:flex-row border-b gap-4 sm:gap-[10rem] pt-8 sm:pt-10 pb-10 sm:pb-10 sm:pr-10 bg-gray-50">
        <div className="flex flex-col gap-3 sm:gap-8 items-center sm:items-start sm:ml-30">
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Host, Connect,<br /> Celebrate: Your Events,<br /> Our Platform!
          </h1>
          <p className="text-md sm:text-xl mr-8">
            Book and learn helpful tips from 3,168+ mentors in <br /> world-class
            companies with out global community.
          </p>
          <Button className="max-w-fit mr-60 sm:mr-0 bg-[#3467e6] hover:bg-[#4874e2] transition-colors duration-300 pt-5 pb-5 pl-8 pr-8 rounded-4xl">Explore Now</Button>
        </div>
        <div>
          <Image
            src={assets.hero}
            alt="hero"
            width={400}
            height={400}
            className="w-100 sm:w-full pl-10 sm:pl-30"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
