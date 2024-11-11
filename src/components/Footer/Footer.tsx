"use client";
import React from "react";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="dark:bg-[#333333] bg-[#F0F0F0 ] border-2 border-[#DDDDDD] dark:border-[#333333] mt-14 mx-5 p-2 rounded-xl">
      <div className="m-2 p-2  flex  ">
        <img src="/BrandIcon.png" width={"110px"} alt="" />
        <span className=" text-[15px] mt-[15px] mx-[15px] dark:text-[#FFFFFF] text-[#000000] ">
          Education Point Coding
        </span>
      </div>

      <div className="flex text-[15px] mx-5  mt-5 dark:text-[#CCCCCC] text-[#333333] ">
        <span>
          Built by{" "}
          <span
            className="underline underline-offset-2"
            onClick={() => {
              window.open(
                "https://github.com/41chaitanya?tab=repositories",
                "_blank"
              );
            }}
          >
            simp-lifier
          </span>{" "}
        </span>
        <PiCopyrightThin />{" "} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
