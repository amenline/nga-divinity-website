"use client";

import { NavItemProps } from "@/app/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideNavProp {
  navigations: NavItemProps[];
}

export const SideNav = ({ navigations }: SideNavProp) => {
  return (
    <nav className="">
      <ul className="menu min-h-screen">
        {navigations.map((nav, i) => (
          <li key={i} className="capitalize text-white text-lg">
            <Link href={`${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
