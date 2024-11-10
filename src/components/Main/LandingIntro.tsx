import React from "react";

const LandingIntro = () => {
  return (
    <>
      <div className="dark:bg-[#333333] bg-[#F0F0F0 ] border-2 border-[#DDDDDD] dark:border-[#333333] mt-14 mx-5 p-4 rounded-xl">
        <h1 className="text-2xl text-center  dark:text-[#FFFFFF] text-[#000000] ">
          {" "}
          <div>Master Coding</div>
          <div> with</div>
          <div> Education Point</div>
        </h1>
        <p className="text-md  text-center mt-5 dark:text-[#CCCCCC] text-[#333333]">
        Unlock your coding potential with Education Point. Whether you're a beginner or looking to sharpen your skills, our platform offers a range of courses to suit your learning needs. Access free and premium content, connect with a global community of learners, and start building your future today.
        </p>
      </div>
    </>
  );
};

export default LandingIntro;
