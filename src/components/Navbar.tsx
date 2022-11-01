import Link from "next/link";
import React from "react";

import { DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons";

const Navbar: React.FC = () => {
  return (
    <nav className="fade-div-top p-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="py-1 text-xl font-bold">
            <Link href="/">
              <a>TLMBZ</a>
            </Link>
          </h2>
          <ul className="flex items-center gap-4">
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/blog">Blog</NavbarLink>
          </ul>
        </div>
        <div className="flex sm:hidden">
          <button aria-label="Navbar Dropdown">
            <DotsVerticalIcon />
          </button>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex overflow-x-hidden rounded-md border-2 border-[#30303F] bg-[#1D1D27] drop-shadow-md">
            <NavbarButton className="border-r-2">Chat</NavbarButton>
            <NavbarButton className="border-r-2">
              <span className="flex items-center gap-1 ">
                <PlusIcon className="text-gray-400" /> Add Screenshot
              </span>
            </NavbarButton>
            <NavbarButton
              className="flex items-center"
              ariaLabel="Expand Navbar Options"
            >
              <DotsVerticalIcon />
            </NavbarButton>
          </div>
          <button
            aria-label="Open Avatar Menu"
            className="flex items-center rounded-full bg-white p-3"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavbarLinkProps {
  children: string;
  href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, href }) => {
  return (
    <li>
      <Link href={href}>
        <a className="rounded-md px-2 py-1 text-sm font-semibold text-gray-500 transition-colors duration-200 hover:bg-[#ffffff0f] hover:text-white">
          {children}
        </a>
      </Link>
    </li>
  );
};

interface NavbarButtonProps {
  className?: string;
  ariaLabel?: string;
  children: React.ReactElement | string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  className,
  children,
  ariaLabel,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`${className} border-[#30303F] bg-[#1D1D27] px-2 py-1 text-xs text-white transition-all duration-200 hover:bg-[#0B0C17]`}
    >
      {children}
    </button>
  );
};
