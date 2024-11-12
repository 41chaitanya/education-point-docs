import React from "react";
import Image from "next/image";

const LandingImageOfTeachers = () => {
  // const imageClassTCSS =
  //   "aspect-square scale-50 rounded-full border-8 shadow-lg hover:scale-[0.6] transition-all duration-300 translate-y-6  ";

  // const nameClassTCSS =
  //   "text-center text-2xl   dark:text-[#FFFFFF] text-[#000000]  ";
  // const LanguageClassTCSS =
  //   "text-2xl  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] ";
  const textMdCSS='md:text-[20px] md:mt-0'
  return (
    <div className=" md:grid md:grid-flow-col">
      
      <div className="iconResponce:hidden">
        <img
          src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/b0bc916b_0829_48d0_b214_f3e8a0a35bc8.jpeg"
          alt=""
          className={`$aspect-square scale-50 rounded-full border-8 shadow-lg hover:scale-[0.6] transition-all duration-300 translate-y-6                                        `}
        />
        <h1
          className={`text-center text-2xl   dark:text-[#FFFFFF] text-[#000000] ${textMdCSS} `}
        >
          Mr.Irfan Raza
        </h1>
        <h2
          className={`text-2xl  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] ${textMdCSS} `}
        >
          ( Founder & CEO )
        </h2>
      </div>
      <div>
        <img
          src="/SachinKumar.jpeg"
          alt=""
          className={`aspect-square scale-50 rounded-full border-8 shadow-lg hover:scale-[0.6] transition-all duration-300 translate-y-6 `}
        />
        <h1
          className={`text-center text-2xl   dark:text-[#FFFFFF] text-[#000000] ${textMdCSS}  `}
        >
          Mr.Sachin Kumar
        </h1>
        <h2
          className={`text-2xl  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] ${textMdCSS} `}
        >
          ( C++ )
        </h2>
      </div>
      <div>
        <img
          src="/AdityaPatil.jpeg"
          alt=""
          className={`aspect-square scale-50 rounded-full border-8 shadow-lg hover:scale-[0.6] transition-all duration-300 translate-y-6 md:w-[1000px]`}
        />
        <h1
          className={`text-center text-2xl   dark:text-[#FFFFFF] text-[#000000] ${textMdCSS} `}
        >
          Mr.Aditya Patil
        </h1>
        <h2
          className={`text-2xl  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] ${textMdCSS} `}
        >
          ( Python )
        </h2>
      </div>
      <div>
        <img
          src="/ChaitanyaSharma.jpeg"
          alt=""
          className={`aspect-square scale-50 rounded-full border-8 shadow-lg hover:scale-[0.6] transition-all duration-300 translate-y-6`}
        />
        <h1
          className={`text-center text-2xl   dark:text-[#FFFFFF] text-[#000000] ${textMdCSS} `}
        >
          Mr.Chaitanya Sharma
        </h1>
        <h2
          className={`text-2xl  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] ${textMdCSS}  `}
        >
          ( Java )
        </h2>
      </div>
    </div>
  );
};

export default LandingImageOfTeachers;
