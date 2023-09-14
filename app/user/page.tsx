"use client";
import React from "react";
import Link from "next/link";
import { AuthStore } from "store/auth";
import Image from "next/image";
import profileImage from "assets/profileImage.png";
import { buttons } from "constants/buttons";

const Page = () => {
  const { user } = AuthStore();

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center py-20">
        <h1>
          You're not logged in, Please{" "}
          <Link href="/user/login" className="text-green">
            Login!
          </Link>
        </h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col pb-5">
      <div className="profile-head w-full h-[250px]"></div>
      <div className="w-full flex items-center bg-zinc-200 py-3 px-20 font-poppins">
        <Image
          src={profileImage}
          alt="profile_img"
          className="rounded-full w-20"
        />
        <div className="text-center w-1/6">
          <h1 className="text-3xl">{user?.name}</h1>
          <p className="py-1 text-sm">@{user?.username}</p>
        </div>
        <p className="w-1/6 text-center">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <div className="flex gap-4 pl-10">
          {buttons.map((button) => (
            <Link href="#">
              <button className="px-5 py-3 min-w-[75px] bg-green hover:bg-gray-400 bg-opacity-40 rounded-lg">
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
