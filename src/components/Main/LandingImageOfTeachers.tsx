import React from "react";
import Image from "next/image";

const LandingImageOfTeachers = () => {
  // const imageClassTCSS = "aspect-square scale-75 rounded-full ";
  const imageClassTCSS =
    "aspect-square scale-75 rounded-full border-8 shadow-lg hover:scale-90 transition-all duration-300 translate-y-6  ";

  const nameClassTCSS =
    "text-center text-2xl   dark:text-[#FFFFFF] text-[#000000]  ";
  const LanguageClassTCSS =
    "text-2xl  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] ";
  return (
    <div className="lg:flex">
      <div>
        <img src="/SachinKumar.jpeg" alt="" className={`${imageClassTCSS}`} />
        <h1 className={`${nameClassTCSS} `}>Mr.Sachin Kumar</h1>
        <h2 className={`${LanguageClassTCSS} `}>( C++ )</h2>
      </div>
      <div>
        <img src="/AdityaPatil.jpeg" alt="" className={`${imageClassTCSS}`} />
        <h1 className={`${nameClassTCSS} `}>Mr.Aditya Patil</h1>
        <h2 className={`${LanguageClassTCSS} `}>( Python )</h2>
      </div>
      <div>
        <img
          src="/ChaitanyaSharma.jpeg"
          alt=""
          className={`${imageClassTCSS}`}
        />
        <h1 className={`${nameClassTCSS} `}>Mr.Chaitanya Sharma</h1>
        <h2 className={`${LanguageClassTCSS} `}>( Java )</h2>
      </div>
    </div>
  );
};

export default LandingImageOfTeachers;
