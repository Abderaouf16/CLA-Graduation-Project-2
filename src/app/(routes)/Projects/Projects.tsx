"use client";

import React, {useState} from "react";
import Header from "./../../Components/Header/Header";
import Image from "next/image";


import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";



function Projects() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const buttons = [
    "interieur",
    "Landscape & Urbanism",
    "Commencial & offices",
    "Industrial & Infrastructure",
    "Residental",
  ];

  return (
    <>
      <Header />
      <div className="px-4 md:px-6 xl:px-28 py-28  ">
        <div className="  py-8 bg-[#EBEBEB] px-10 rounded-3xl ">
          <div className=" flex items-center">
            <h1 className="  flex font-bold text-xl ">
              Architecture Projects{" "}
              <div className=" border-2 border-black mx-4 my-1 "></div>{" "}
            </h1>
            <p className=" font-medium">200 Result</p>
          </div>
          <p className="  pt-3">
            Top architecture projects recently published on ArchiVision. The
            most inspiring residential architecture, interior design,
            landscaping, urbanism, and more from the world’s best architects.
          </p>
        </div>
        <div className=" flex  mt-20 mb-10">
            <div className="flex-1 flex items-center flex-wrap">
              {buttons.map((text, index) => (
                <button
                  key={index}
                  className={`${
                    activeIndex === index ? "bg-[#EBEBEB]" : "bg-white"
                  } px-7 mx-2 text-xs md:text-sm font-medium cursor-pointer rounded-xl border-2 border-[#EBEBEB] py-5 h-10 flex justify-center items-center my-2`}
                  onClick={() => setActiveIndex(index)}
                >
                  {text}
                </button>
              ))}
            </div>

            <div className="flex">
              <Menubar className="rounded-xl border-2 border-[#EBEBEB] cursor-pointer">
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">
                    <Image
                      src="/bars-solid.svg"
                      alt="Menu Icon"
                      width={15}
                      height={5}
                    />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <div className="  h-[500px] border-2 border-[#EBEBEB] rounded-3xl ">
            <h1>55 </h1>
          </div>
      </div>
    </>
  );
}

export default Projects;
