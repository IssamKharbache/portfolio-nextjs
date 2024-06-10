"use client";
import React from "react";
import { FloatingNav } from "@/components/mycomp/floating-navbar";
import { HiHome } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

export function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HiHome className="w-4 h-4 text-neutral-300" />,
    },

    {
      name: "About",
      link: "/about",
      icon: <FaRegUser className="w-4 h-4 text-neutral-300" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <AiOutlineMessage className="w-4 h-4 text-neutral-300" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
