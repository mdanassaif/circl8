"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";
import Image from "next/image";

import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({ subsets: ["latin"] });

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={cn("fixed inset-x-0 mx-auto z-50", className)}
      style={{ backgroundColor: 'white', padding: '20px 0 20px 0' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ padding: '0 0 0 40px' }}>
          <Image
            src="/photaas/plogo2.png"
            width={80}
            height={80}
            alt="recycling process demo"
          />
        </div>
        {isMobile ? (
          <div style={{ padding: '0 40px 0 0' }}>
            <button onClick={toggleMenu} style={{ fontSize: '40px' , color: '#0011a8'}}>
              ☰
            </button>
            {menuOpen && (
              <div
                ref={menuRef}
                style={{ position: 'absolute', top: '80px', right: '40px', background: 'white', boxShadow: '0 0 10px rgba(18, 9, 147, 0.1)', borderRadius: '8px' , width: '150px', height: '200px', display: 'flex' , flexDirection: 'column', gap : '10px' , alignItems: 'center', justifyContent: 'center'}}
              >
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
            )}
          </div>
        ) : (
          <Menu setActive={setActive}>
            <div className="flex justify-center items-center h-full space-x-20" style={{ padding: '0 40px 0 0' }}>
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
