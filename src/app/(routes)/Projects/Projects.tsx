"use client";

import React, { useState } from "react";
import Header from "./../../Components/Header/Header";
import Image from "next/image";
import Heart from "react-animated-heart";

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
  const [isClick, setClick] = useState(false);
  const buttons = [
    "interieur",
    "Landscape & Urbanism",
    "Commencial & offices",
    "Industrial & Infrastructure",
    "Residental",
  ];

  const projects = [
    {
      title: "Project 1",
      imageSrc: "https://www.w3schools.com/w3images/rocks.jpg",
    },
    {
      title: "Project 2",
      imageSrc: "https://www.w3schools.com/w3images/falls2.jpg",
    },
    {
      title: "Project 2",
      imageSrc: "https://www.w3schools.com/w3images/falls2.jpg",
    },
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
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-red-200  h-[300px]   flex flex-col rounded-xl "
            >
              <img
                className=" bg-contain  bg-center h-[80%] rounded-xl"
                src={project.imageSrc}
                alt={project.title}
              />
              <div className="p-2  flex ">
                <div className=" bg-blue-200 flex-1">
                  <h1 className=" font-medium text-md">{project.title}</h1>
                  <p className="font-normal text-sm">ffffffffff</p>
                </div>
                {/* <div className="flex justify-center items-center">
                  <Heart
                    width="50px"
                    height="50px"
                    isClick={isClick}
                    onClick={() => setClick(!isClick)}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
