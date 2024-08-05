"use client";

import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import bars from "../../../../public/bars-solid.svg";
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

function Page() {
  const buttons = [
    "interieur",
    "Landscape & Urbanism",
    "Commencial & offices",
    "Industrial & Infrastructure",
    "Residental",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Header />
      <div className="px-4 md:px-6 xl:px-14 py-16 ">
        <div
          className="bg-slate-400 w-full h-[550px] rounded-2xl my-10  relative"
          style={{
            backgroundImage: `url(/heroImg.jpg)`, // Public path reference
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="blurContainer bg-slate-500  w-[370px]  rounded-2xl  absolute bottom-0 left-0 m-5 py-3 px-5">
            <div className="  flex ">
              <div className="heroPofileImg"></div>
              <div className=" mx-3 ">
                <h1 className=" text-sm text-white font-semibold ">
                  Anderson chavvaria
                </h1>
                <p className="textGrey  text-xs font-base">@andrs</p>
              </div>
            </div>
            <div className="  my-2">
              <h1 className="text-white text-xl font-semibold">
                Modern luxury living space revealed
              </h1>
            </div>
            <div className=" my-2">
              <p className="text-xs textGrey">
                Discover the epitome of luxury living in this modern space.
                Elegance meets comfort with hight ceiling, natural light
              </p>
            </div>
          </div>
        </div>

        <section>
        <div className=" h-16 flex  items-center   ">
          {buttons.map((text, index) => (
            <button
              key={index}
              className={` ${
                activeIndex === index ? "bg-[#EBEBEB]" : "bg-white"
              } px-7 mx-2 text-sm font-medium cursor-pointer rounded-xl border-2 border-[#EBEBEB]  py-5 h-10 flex justify-center items-center  `}
              onClick={() => setActiveIndex(index)}
            >
              {text}
            </button>
          ))}
          <div className="  ml-auto">
            <Menubar className="rounded-xl border-2 border-[#EBEBEB]  cursor-pointer">
              <MenubarMenu className=''>
                <MenubarTrigger className=' cursor-pointer'>
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
            </Menubar>{" "}
          </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default Page;
