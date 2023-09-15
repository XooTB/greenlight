"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "hooks/useAuth";
import { userData, AuthStore } from "store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const { isLoading, error, userSignup } = useAuth();
  const [match, setMatch] = useState<boolean>();
  const router = useRouter();

  const { user } = AuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userData>();
  const pass = watch("password");
  const passCon = watch("passwordConfirm");

  const onSubmit: SubmitHandler<userData> = (data: userData) => {
    userSignup(data);
  };

  useEffect(() => {
    if (pass === passCon) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [pass, passCon]);

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
          {...register("passwordConfirm", {
            required: true,
          })}
          className="px-3 py-2 w-4/5 rounded-lg border border-green text-blue text-sm"
        />
        {!match && (
          <div className="flex justify-start w-4/5">
            <p className="text-red font-semibold ">Passwords don't match</p>
          </div>
        )}

        <button
          type="submit"
          className="text-white bg-green px-5 py-2 w-4/5 rounded-lg hover:bg-zinc-400
           font-semibold hover:cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? <BeatLoader /> : "Sign up"}
        </button>
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
