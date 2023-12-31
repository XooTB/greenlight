"use client";
import React from "react";
import logo from "assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { PersonOutline, ShoppingCart } from "@mui/icons-material";
import { AuthStore } from "store/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import useAuth from "hooks/useAuth";

const NavBar = () => {
  const { user } = AuthStore();
  const { userLogout } = useAuth();

  const handleLogout = () => {
    userLogout();
  };

  return (
    <div className="container mx-auto flex justify-between items-center bg-white h-20">
      <div className="flex items-center justify-center w-1/3">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-38" />
          <p className="text-2xl pl-1 font-semibold text-green">Greenlight</p>
        </Link>
      </div>
      <div
        className="flex font-roboto text-base w-1/3 justify-between items-center font-medium
       text-black px-5"
      >
        <Link href="/products">
          <p className="hover:text-green transition duration-300">Discover</p>
        </Link>
        <Link href="/about">
          <p className="hover:text-green transition duration-300">About</p>
        </Link>
        <Link href="/#">
          <p className="hover:text-green transition duration-300">Contact us</p>
        </Link>
      </div>

      <div className="w-1/3 flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <PersonOutline className="h-7 w-7" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user && (
              <>
                <Link href="/user">
                  <DropdownMenuItem className="hover:cursor-pointer hover:bg-green hover:bg-opacity-40">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  className="hover:bg-red-600 hover:bg-opacity-40 hover:cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </DropdownMenuItem>
              </>
            )}
            {!user && (
              <>
                <Link href="/user/login">
                  <DropdownMenuItem className="hover:bg-green hover:cursor-pointer hover:bg-opacity-40">
                    Login
                  </DropdownMenuItem>
                </Link>
                <Link href="/user/signup">
                  <DropdownMenuItem className="hover:bg-green hover:cursor-pointer hover:bg-opacity-40">
                    Signup
                  </DropdownMenuItem>
                </Link>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/cart" className="px-2 py-2">
          <ShoppingCart className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
