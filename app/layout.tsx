import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, SideNav } from "./ui";
import { Footer } from "./ui/frame/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NGA Divinity",
  description: "Home Health Services",
};

const navs = [
  {
    title: "Home",
    path: "/",
    id: "001",
  },
  {
    title: "About Us",
    path: "/about",
    id: "002",
  },
  {
    title: "Services",
    path: "/services",
    id: "003",
  },
  {
    title: "Contact",
    path: "/contact",
    id: "004",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-nda-bg1`}>
        <div className="drawer drawer-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <Navbar navigations={navs} />
            <main>{children}</main>
            <Footer navigations={navs} />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <SideNav navigations={navs} />
          </div>
        </div>
      </body>
    </html>
  );
}
