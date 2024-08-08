"use client";

import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
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
  // Filters
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
      <div className="px-4 md:px-6 xl:px-14 py-16 ">
        <div
          className="bg-slate-400 w-full h-[550px] rounded-2xl my-10  relative"
          style={{
            backgroundImage: `url(/heroImg.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="blurContainer bg-slate-500 md:w-[370px] rounded-2xl absolute bottom-0 left-0 m-5 py-3 px-5">
            <div className="flex">
              <div className="heroPofileImg"></div>
              <div className="mx-3">
                <h1 className="text-xs md:text-sm text-white font-semibold">
                  Anderson chavvaria
                </h1>
                <p className="textGrey text-xs font-base">@andrs</p>
              </div>
            </div>
            <div className="my-2">
              <h1 className="text-white text-lg md:text-xl font-semibold">
                Modern luxury living space revealed
              </h1>
            </div>
            <div className="my-2">
              <p className="text-xs md:text-xs textGrey">
                Discover the epitome of luxury living in this modern space.
                Elegance meets comfort with high ceilings, natural light
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="h-16 flex">
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

          <div className="row my-10">
            <div className="column">
            <div  className=" w-full h-[220px] sm:h-[220px]  bg-red-400">  <img className='img' src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[350px] sm:h-[460px] bg-blue-400 ">  <img className='img' src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[280px] sm:h-[230px]  bg-slate-300 ">  <img className='img' src="https://www.w3schools.com/w3images/falls2.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[330px] sm:h-[280px]  bg-slate-500">  <img  className='img' src="https://www.w3schools.com/w3images/paris.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[300px] sm:h-[350px]   bg-green-400">  <img className='img' src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[310px] sm:h-[260px]   bg-yellow-300">  <img className='img'  src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[280px] sm:h-[230px]  bg-violet-500">  <img className='img'  src="https://www.w3schools.com/w3images/paris.jpg" style={{ width: "100%" }} /> </div>
            </div>

            <div className="column"> 
         <div  className=" w-full h-[320px]  bg-red-400"> <img className='img' src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[280px]   bg-yellow-300"><img className='img' src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[250px] bg-blue-400 "> <img className='img' src="https://www.w3schools.com/w3images/ocean.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[240px]  bg-slate-300 "> <img className='img' src="https://www.w3schools.com/w3images/mountainskies.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[250px]  bg-slate-500"> <img className='img' src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[350px]   bg-green-400"> <img className='img' src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[230px]  bg-violet-500"> <img className='img' src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} /></div>

            </div>

            <div className="column">
            <div  className=" w-full h-[220px]  bg-red-400">  <img className='img' src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[460px] bg-blue-400 ">  <img className='img' src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[230px]  bg-slate-300 ">  <img className='img' src="https://www.w3schools.com/w3images/falls2.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[280px]  bg-slate-500">  <img  className='img' src="https://www.w3schools.com/w3images/paris.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[350px]   bg-green-400">  <img className='img' src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[260px]   bg-yellow-300">  <img className='img'  src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }} /> </div>
              <div className=" w-full h-[230px]  bg-violet-500">  <img className='img'  src="https://www.w3schools.com/w3images/paris.jpg" style={{ width: "100%" }} /> </div>

            </div>

            <div className="column">
            <div  className=" w-full h-[320px]  bg-red-400"> <img className='img' src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[280px]   bg-yellow-300"><img className='img' src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[250px] bg-blue-400 "> <img className='img' src="https://www.w3schools.com/w3images/ocean.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[240px]  bg-slate-300 "> <img className='img' src="https://www.w3schools.com/w3images/mountainskies.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[250px]  bg-slate-500"> <img className='img' src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[350px]   bg-green-400"> <img className='img' src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} /></div>
              <div className=" w-full h-[230px]  bg-violet-500"> <img className='img' src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} /></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
