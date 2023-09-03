import React from "react";
import { infoData } from "@/constants/info";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import outlook from "assets/outlook.png";

const Info = () => {
  return (
    <div className="bg-white py-14 pl-10 flex items-center">
      <div className="w-1/2 py-10 pl-14">
        <h1 className="font-poppins font-medium text-blue text-5xl">
          Clean and <br />
          fragrant soy wax
        </h1>
        <p className="font-poppins text-green font-medium mt-3">
          Made for your home and for your wellness
        </p>
        <div className="pt-8">
          {infoData?.map((info) => (
            <div className="flex gap-2 text-black font-poppins py-2">
              <CheckCircleOutline />
              <span className=" font-semibold">{info.slug}:</span>
              <p className=" font-medium"> {info.text}.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <Image src={outlook} height={300} width={500} alt="outlook_img" />
      </div>
    </div>
  );
};

export default Info;
