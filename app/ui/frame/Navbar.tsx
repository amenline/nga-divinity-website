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
  return (
    <div className="bg-white mx-4 md:mx-12 lg:mx-24 px-4 md:px-9 py-2 md:py-3 rounded-b-3xl shadow-lg">
      <nav className="flex justify-between">
        <Link href="/" className="block md:hidden">
          <Image src={Logo} alt="NGA Divinity Logo" width={35} height={35} />
        </Link>
        <Link href="/" className="hidden md:block">
          <Image src={Logo} alt="NGA Divinity Logo" width={45} height={45} />
        </Link>
        <ul className="hidden md:flex items-center">
          {navigations.map((nav) => (
            <li key={nav.id} className="px-4">
              <Link
                href={nav.path}
                className={`font-medium text-sm py-2 ${
                  nav.path === currentRoute
                    ? "card-border-text border-t-2 border-nda-primary"
                    : "text-nda-texts hover:text-nda-texts/60"
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <label htmlFor="my-drawer-3" className="md:hidden drawer-button">
          <div className="flex items-center">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Menu_Alt_02">
                <path
                  id="Vector"
                  d="M11 17H19M5 12H19M11 7H19"
                  stroke="#2c7ba7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </label>
      </nav>
    </div>
  );
};
