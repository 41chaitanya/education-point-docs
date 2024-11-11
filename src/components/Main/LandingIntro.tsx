import React from "react";
import HeroIconsCollection from "../Utility/HeroIconsCollection";

const LandingIntro = () => {
  return (
    <>
      <div className="dark:bg-[#333333] bg-[#F0F0F0 ] border-2 border-[#DDDDDD] dark:border-[#333333] mt-14 mx-5 p-4 rounded-xl">
        <h1 className="text-2xl text-center  dark:text-[#FFFFFF] text-[#000000] lg:text-left  lg:mx-60   lg:text-[40px] lg:w-80  ">
          {" "}
          <div className="py-2">Master Coding</div>
          <div className="py-2"> with</div>
          <div className="py-2"> Education Point</div>
        </h1>
        <div className="lg:block hidden"><HeroIconsCollection/></div>
        <p className="text-md  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] lg:text-left  lg:mx-60 lg:w-[500px]   ">
          Unlock your coding potential with Education Point. Whether you're a
          beginner or looking to sharpen your skills, our platform offers a
          range of courses to suit your learning needs. Access free and premium
          content, connect with a global community of learners, and start
          building your future today.
        </p>
      </div>
    </>
  );

};

export default LandingIntro;
