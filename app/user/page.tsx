"use client";
import React from "react";
import Link from "next/link";
import { AuthStore } from "store/auth";

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
      <div className="w-full flex items-center bg-zinc-200 py-2 gap-10 font-poppins">
        <div className="text-center w-1/5">
          <h1 className="text-3xl">{user?.name}</h1>
          <p className="py-1 text-sm">@{user?.username}</p>
        </div>
        <p className="w-1/5 text-center">{user?.email}</p>
      </div>
    </div>
  );
};

export default Page;
