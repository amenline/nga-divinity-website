import Link from "next/link";
import React from "react";
import Logo from "../../../public/nga-divinity-logo.svg";
import Image from "next/image";
import { NavItemProps } from "@/app/lib";

interface NavbarProps {
  navigations: NavItemProps[];
}

export const Footer = ({ navigations }: NavbarProps) => {
  return (
    <footer className="flex flex-col">
      <div className="w-full text-center py-4 bg-gradient-to-t from-smp-grad1 via-smp-grad1 to-smp-primary">
        <p className="capitalize">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link href={"/"}>NGA Divinity</Link> All rights reserved.
        </p>
      </div>
    </footer>
  );
};
