"use client";

import { NavItemProps } from "@/app/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoWithName from "../../../public/logo-with-name.svg";
import Image from "next/image";

interface SideNavProp {
  navigations: NavItemProps[];
}

export const SideNav = ({ navigations }: SideNavProp) => {
  const currentRoute = usePathname();
  return (
    <nav className="bg-white pr-10 min-h-screen">
      {/* <div className="flex">
        <div className="flex-1"></div>
        <button className="btn btn-sm btn-circle btn-outline text-nda-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div> */}
      <div className="pl-5 mt-3">
        <Link href={`/`}>
          <Image src={LogoWithName} alt="NGA Divinity" height={45} />
        </Link>
      </div>

      <ul className="menu mt-5">
        {navigations.map((nav, i) => (
          <li
            key={i}
            className={`capitalize text-nda-primary text-sm ${
              nav.path === currentRoute ? "border-l-2 border-nda-secondary" : ""
            }`}
          >
            <Link href={`${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
