import React, {ReactNode} from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import img1 from '../../../../public/img2.jpg'

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ListItemProps {
  href: string;
  title: string;
  children: ReactNode;
}


const ListItem: React.FC<ListItemProps> = ({ href, title, children }) => (
  <li>
    <a href={href} className="flex flex-col p-3 hover:bg-gray-100 rounded-md">
      <div className="text-lg font-medium">{title}</div>
      <p className="text-sm">{children}</p>
    </a>
  </li>
);

function Header() {
  return (
    <>
      <nav className=" flex justify-between items-center p-4 py-7">
        <div className="  flex items-center justify-center">
          <p className="roboto-bold text-xl font-medium ">ArchiVision</p>
          <div className=" ml-6  md:ml-16">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul  className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3 ">
                        
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                            style={{ 
                              backgroundImage: "url('/img2.jpg')", 
                              backgroundSize: 'cover', 
                              backgroundPosition: 'center' 
                            }}                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 ">
          <Input
            type="text"
            placeholder="Search for projects.."
            className="text-[13px] rounded-xl bg-[#EBEBEB] border-none text-black pr-10 no-focus-border"
          />
          <div className="flex justify-center items-center">
            <Button
              className=" px-8  ml-5 mr-2 border-[#EBEBEB] border-2 text-black rounded-xl  bg-transparent hover:bg-slate-300"
              asChild
            >
              <Link href="/login" className="font-semibold text-[13px] ">
                Sign Up
              </Link>
            </Button>
            <Button className="px-8  rounded-xl " asChild>
              <Link href="/login" className="font-semibold text-[13px] ">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
