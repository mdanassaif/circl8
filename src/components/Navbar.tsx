"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";
import Image from "next/image";

import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({ subsets: ["latin"] });

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 mx-auto z-50", className)} style={{ backgroundColor: 'white' , padding: '20px 0 20px 0 ' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }} >
       <div style={{padding: '0 0 0 40px ' }}>
        <Image
          src="/photaas/plogo1.png"
          width={80}
          height={80}
           
          alt="recycling process demo"
        />
      </div>
      <Menu setActive={setActive} >
        <div className="flex justify-center items-center h-full space-x-20 " style={{padding: '0 40px 0 0 ' }}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
          </Link>
          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
          </Link>
          <Link href={"/team"}>
            <MenuItem setActive={setActive} active={active} item="Team"></MenuItem>
          </Link>
        </div>
      </Menu>
      {/* <div className="bg-red"></div> */}
    </div>
    </div>
  );
};

export default Navbar;
