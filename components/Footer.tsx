import React from "react";
import logoWhite from "assets/logo-white.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-10 ">
      <div className=" mx-20 border-t flex py-10">
        <div className="w-1/2">
          <div className="flex gap-2 items-center">
            <Image src={logoWhite} alt="logo" />
            <Link href="/" className="">
              <h2 className="text-4xl text-white font-poppins hover:text-green transition duration-100">
                GreenLight
              </h2>
            </Link>
          </div>
          <p className="font-poppins font-medium text-white text-base pt-3">
            Your natural candle made for your home and for your wellness.
          </p>
        </div>
        <div className="w-1/2 flex justify-between">
          <ul className="text-white font-poppins">
            <li className="py-1 pb-3 font-semibold text-green">
              <Link href="#">Discovery</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">New Season</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Most Searched</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Most Sold</Link>
            </li>
          </ul>
          <ul className="text-white font-poppins">
            <li className="py-1 pb-3 font-semibold text-green">
              <Link href="#">About</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Help</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Shipping</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Affiliate</Link>
            </li>
          </ul>
          <ul className="text-white font-poppins">
            <li className="py-1 pb-3 font-semibold text-green">
              <Link href="#">Info</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Contact Us</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Privacy Policies</Link>
            </li>
            <li className="py-1 font-medium hover:text-green transition duration-100">
              {" "}
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
