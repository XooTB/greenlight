"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "hooks/useAuth";
import { userData, AuthStore } from "store/auth";
import Link from "next/link";

const SignUp = () => {
  const { isLoading, error, userSignup } = useAuth();
  const { user } = AuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>();

  const onSubmit: SubmitHandler<userData> = (data: userData) => {
    userSignup(data);
  };

  console.log(user);

  return (
    <div className="min-h-screen flex justify-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 justify-center bg-zinc-200 px-5 py-14 w-2/5 items-center
         font-poppins font-medium rounded-lg"
      >
        <h1 className="text-3xl font-semibold pb-5">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true, max: 20, min: 6 })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("passwordConfirm", { required: true })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />

        <input
          type="submit"
          className="text-white bg-green px-5 py-2 w-4/5 rounded-lg hover:bg-zinc-400
           font-semibold hover:cursor-pointer"
          disabled={isLoading}
        />
        <p className="font-medium font-poppins">
          Alredy have an account?{" "}
          <Link
            href="/user/login"
            className="text-green underline font-semibold pt-5"
          >
            Login!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
