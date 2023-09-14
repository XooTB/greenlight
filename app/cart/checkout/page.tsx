"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthStore } from "store/auth";
import { useCart } from "store/store";
import CheckoutProduct from "sections/CheckoutProduct";

type checkoutInfo = {
  email: string;
  name: string;
  address: string;
  shipping_code: string;
  city: string;
  post_code: string;
};

const page = () => {
  const { user } = AuthStore();
  const { cart, total } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<checkoutInfo>();

  useEffect(() => {
    if (!user) {
      router.push("/user/login");
    }
  }, [user]);

  const onSubmit: SubmitHandler<checkoutInfo> = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 min-h-screen">
        <div></div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-10 text-sm gap-2 font-poppins"
          >
            <div className="flex flex-col">
              <div className="flex justify-between pb-4 items-center font-roboto">
                <h1 className="text-2xl text-blue pt-10 font-semibold">
                  Contact
                </h1>
                {!user && (
                  <p>
                    Do you have an account?{" "}
                    <Link href="/user/login" className="text-green font-medium">
                      Login
                    </Link>
                  </p>
                )}
              </div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="px-3 py-3 border  border-grey rounded-sm text-grey"
              />
            </div>

            <h1 className="text-2xl font-roboto font-medium pt-7 textblack">
              {" "}
              Shipping Address
            </h1>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="px-3 py-3 border  border-grey rounded-sm"
            />
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className="px-3 py-3 border  border-grey rounded-sm text-grey"
            />
            <input
              type="text"
              placeholder="Shipping Code"
              {...register("shipping_code", { required: false })}
              className="px-3 py-3 border  border-grey rounded-sm text-grey"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
                className="px-3 py-3 border  border-grey rounded-sm w-1/2 text-grey"
              />
              <input
                type="text"
                placeholder="Postal Code"
                {...register("post_code", { required: true })}
                className="px-3 py-3 border  border-grey rounded-sm w-1/2 text-grey"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <Link href="/cart" className="underline text-green font-medium ">
                Back to cart
              </Link>
              <input
                type="submit"
                value="Submit Order"
                className="bg-green hover:bg-grey cursor-pointer px-5 py-3 text-white font-semibold rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-lightGrey min-h-screen pt-10">
        <div className="px-14">
          {cart?.map((item, i) => (
            <CheckoutProduct product={item} key={i} />
          ))}
        </div>
        <hr className="h-px text-black mx-10" />
        <div className="font-roboto font-semibold px-20 py-7">
          <div className="flex justify-between">
            <p className="text-grey">Subtotal:</p>
            <p className="">${total}</p>
          </div>
          <div className="flex justify-between font-roboto pt-2">
            <p className="text-grey">Shipping:</p>
            <p className="text-black">$5.99</p>
          </div>
        </div>
        <hr className="h-px text-black mx-10" />
        <div className="flex justify-between font-roboto px-20 py-5">
          <p className="text-grey">Total:</p>
          <p className="text-black text-xl font-semibold">${total + 6}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
