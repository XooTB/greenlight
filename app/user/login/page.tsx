"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import useAuth from "hooks/useAuth";
import { AuthStore } from "store/auth";
import { useRouter } from "next/navigation";

type loginInfo = {
  email: string;
  password: string;
};

const page = () => {
  const { isLoading, error, userLogin } = useAuth();
  const { user } = AuthStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInfo>();
  const onSubmit: SubmitHandler<loginInfo> = (data) => {
    userLogin(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      router.push("/user");
    }
  }, [user]);

  console.log(errors);
  console.log(user);

  return (
    <div className="min-h-screen flex justify-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 justify-center bg-zinc-200 px-5 py-14 w-2/5 items-center
         font-poppins font-medium rounded-lg"
      >
        <h1 className="text-3xl font-semibold pb-5">Login</h1>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />

        <input
          type="submit"
          value="Login"
          className="text-white bg-green px-5 py-2 w-4/5 rounded-lg hover:bg-zinc-400
           font-semibold hover:cursor-pointer"
          disabled={isLoading}
        />
        <p className="font-medium font-poppins">
          Don't have an account?{" "}
          <Link
            href="/user/signup"
            className="text-green underline font-semibold pt-5"
          >
            Signup!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
