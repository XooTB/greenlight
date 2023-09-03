import React from "react";
import logo from "assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { PersonOutline, ShoppingCart } from "@mui/icons-material";

const NavBar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center bg-white h-20">
      <div className="flex items-center justify-center w-1/3">
        <Image src={logo} height={40} width={40} alt="logo" />
        <p className="text-2xl pl-1 font-semibold text-green">Greenlight</p>
      </div>
      <div className="flex font-roboto text-base w-1/3 justify-between items-center font-medium text-black px-5">
        <Link href="/discover">
          <p className="hover:text-green transition duration-300">Discover</p>
        </Link>
        <Link href="/about">
          <p className="hover:text-green transition duration-300">About</p>
        </Link>
        <Link href="/contact">
          <p className="hover:text-green transition duration-300">Contact us</p>
        </Link>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <Link href="/login" className="px-2 py-2">
          <PersonOutline className="h-7 w-7" />
        </Link>
        <Link href="/cart" className="px-2 py-2">
          <ShoppingCart className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
