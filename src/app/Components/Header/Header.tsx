"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import interieur from "../../../../public/interieur.jpg";
import Industrial from "../../../../public/industrial.jpg";
import landScape from "../../../../public/landscape.jpg";
import homeDesign from "../../../../public/home-design.jpg";
import commercial from "../../../../public/offices.jpg";
import bars from "../../../../public/bars-solid.svg";
import "./Header.css";
import magnifyingIcon from './../../../../public/magnifying.svg' 
import SignBtns from './../CheckAuth/AuthHeader'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Select,SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// toggle
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ListItemProps {
  href: string;
  title: string;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  href,
  title,
  children,
  onMouseEnter,
  onMouseLeave,
}) => (
  <li>
    <a
      href={href}
      className="flex flex-col p-3 hover:bg-gray-100 rounded-md"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="text-base font-medium">{title}</div>
      <p className="text-xs">{children}</p>
    </a>
  </li>
);





function Header() {
  const [currentImage, setCurrentImage] = useState<string>(interieur.src);

  const handelMouseEnter = (img: string) => {
    setCurrentImage(img);
  };

  const handelMouseLeave = () => {
    setCurrentImage(currentImage);
  };

  //toggle mobile view
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <nav className="  fixed top-0 right-0 left-0 z-50   flex justify-between items-center px-4 md:px-6 xl:px-14 py-5 bg-white  ">
        <div className="  flex items-center justify-center">
          <Link href="/Home" className="roboto-bold text-lg md:text-xl font-medium cursor-pointer ">
          ArchiVision
              </Link>
          <div className=" ml-6  md:ml-16">
            <NavigationMenu className="discover">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-3">
                      <li className="row-span-3 ">
                        <NavigationMenuLink asChild>
                          <div
                            className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            style={{
                              backgroundImage: `url(${currentImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/docs"
                        title="interieur"
                        onMouseEnter={() => handelMouseEnter(interieur.src)}
                        onMouseLeave={handelMouseLeave}
                      >
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem
                        href="/docs/installation"
                        title="Landscape & Urbanism"
                        onMouseEnter={() => handelMouseEnter(landScape.src)}
                      >
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Commencial & offices"
                        onMouseEnter={() => handelMouseEnter(commercial.src)}
                        onMouseLeave={handelMouseLeave}
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                      <ListItem
                        href="/docs"
                        title="Industrial & Infrastructure"
                        onMouseEnter={() => handelMouseEnter(Industrial.src)}
                        onMouseLeave={handelMouseLeave}
                      >
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem
                        href="/docs/installation"
                        title="Residental"
                        onMouseEnter={() => handelMouseEnter(homeDesign.src)}
                        onMouseLeave={handelMouseLeave}
                      >
                        How to install dependencies and structure your app.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-4  ">
          <div className="flex justify-between bg-[#EBEBEB]  items-center rounded-xl px-4    ">
            
          <Input
            type="text"
            placeholder="Search for projects.."
            className=" text-xs md:text-[13px]  bg-[#EBEBEB] border-none text-black  no-focus-border pl-0  md:pr-10"
          />
          
          <img src={magnifyingIcon.src} alt="magnifyingIcon" 
            className='h-4  cursor-pointer ' />
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "mobileView" : ""
            } memberShip flex justify-center items-center  `}
          >
            <SignBtns/>
          </div>
          <div className="humberger flex-shrink-0   flex justify-between items-center   cursor-pointer">
            <Sheet >
              <SheetTrigger className="   p-2 border-[#EBEBEB] border-2 rounded-xl   hover:bg-[#EBEBEB]">
                <img
                  src="/bars-solid.svg"
                  className="w-5 h-5 cursor-pointer "
                  onClick={toggleMobileMenu}
                  alt=""
                />
              </SheetTrigger>
              <SheetContent className="rounded-xl">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                  <SignBtns/>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;