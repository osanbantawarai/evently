"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { Toaster, toast } from "sonner";

const EventForm = () => {
  const [selectImage, setSelectImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const handleSelectImage = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    if (
      !title ||
      !category ||
      !description ||
      !selectImage ||
      !location ||
      !startDate ||
      !endDate ||
      !price ||
      !url
    ) {
      toast.error("Please enter all the required fields");
    } else {
      toast.success("Event created successfully");
    }
  };

  return (
    <div>
      <Toaster position="top-right" visibleToasts={2} closeButton />;
      <form
        action="submit"
        className=" grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5 ml-10 sm:ml-30 mr-5 sm:mr-30 mt-8"
      >
        <div>
          <Input
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            placeholder="Event title"
            type="text"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Select onValueChange={(Value) => setCategory(Value)}>
            <SelectTrigger className="w-full rounded-3xl">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="NextJS">NextJS</SelectItem>
              <SelectItem value="UI/UX">UI/UX</SelectItem>
              <SelectItem value="Development">Development</SelectItem>
              <SelectItem value="Tech">Tech</SelectItem>
              <SelectItem value="Artificial Intelligence">
                Artificial Intelligence
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Textarea
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          placeholder="Description"
          className=" h-50 sm:h-full rounded-3xl"
        />
        <div className="border-2 border-dashed p-5 flex flex-col justify-center items-center gap-2 rounded-3xl relative w-full">
          {selectImage ? (
            <Image
              src={selectImage}
              alt="select"
              fill
              className="object-cover rounded-lg"
            />
          ) : (
            <Image src={assets.upload} alt="upload" width={48} height={48} />
          )}

          <h2>Drop photo here </h2>
          <h3>PNG, SVG, JPEG</h3>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleSelectImage}
          />
          <label htmlFor="file">
            <h1 className="bg-[#634CF5] hover:bg-[#7964ff] transition-color duration-300 text-white w-[12rem] h-10 flex items-center justify-center rounded-4xl cursor-pointer ">
              Select from computer
            </h1>
          </label>
        </div>
        <div className="flex flex-col col-span-1 sm:col-span-2 ">
          <div className="items-start justify-center ">
            <Image
              src={assets.locationGray}
              alt="location"
              className="absolute size-10 pl-4"
            />
            <Input
              value={location}
              onChange={(e: any) => setLocation(e.target.value)}
              type="text"
              placeholder="Event location or Online"
              className="relative pl-12 rounded-3xl"
            />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <Image
            src={assets.time}
            alt="location"
            className="absolute pl-4 size-10 h-5"
          />
          <h2 className="absolute ml-11 ">Start Date:</h2>
          <Input
            value={startDate}
            onChange={(e: any) => setStartDate(e.target.value)}
            type="Date"
            className="relative pl-32 flex items-centerc rounded-3xl"
          />
        </div>
        <div className="flex justify-start items-center">
          <Image
            src={assets.time}
            alt="location"
            className="absolute pl-4 size-10 h-5"
          />
          <h2 className="absolute ml-11">End Date:</h2>
          <Input
            value={endDate}
            onChange={(e: any) => setEndDate(e.target.value)}
            type="Date"
            className="relative pl-32 flex items-center rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <Image
            src={assets.dollar}
            alt="location"
            className="absolute size-10 pl-4"
          />
          <Input
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
            className="relative pl-12 rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <Image
            src={assets.link}
            alt="location"
            className="absolute size-10 pl-4"
          />
          <Input
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
            type="text"
            placeholder="URL"
            className="relative pl-12 rounded-3xl"
          />
        </div>
        <button
          type="submit"
          onClick={(e: any) => {
            e.preventDefault();
            handleSubmit();
          }}
          className=" bg-[#634CF5] hover:bg-[#7964ff] transition-color duration-300 text-white h-10 flex items-center justify-center rounded-4xl cursor-pointer col-span-1 sm:col-span-2 w-full"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
