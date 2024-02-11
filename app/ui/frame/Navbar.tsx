"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavItemProps } from "@/app/lib";
import Logo from "../../../public/nga-divinity-logo.svg";

interface NavbarProps {
  navigations: NavItemProps[];
}

export const Navbar = ({ navigations }: NavbarProps) => {
  const currentRoute = usePathname();
  return <div>hello</div>;
};
