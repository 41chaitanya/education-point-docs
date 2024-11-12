import React from "react";

const CoursesTemplate = () => {
    const cources = [
        {
          short: "Cpp",
          coursesName: "C++ for Beginner (Full Course)",
          accessiblity: "FREE",
        },
        {
          short: "Java",
          coursesName: "Java for Beginner (Full Course)",
          accessiblity: "FREE",
        },
        {
          short: "Python",
          coursesName: "The Ultimate Python for Beginner (Full Course)",
          accessiblity: "FREE",
        },
      ];
  return (
    <div className="gird grid-flow-row grid-cols-1 ">

        <div className="h-80  dark:bg-[#333333] bg-[#F0F0F0 ] border-2 border-[#DDDDDD] dark:border-[#333333] mt-14 mx-5 p-4 rounded-xl "> hello</div>
    
       
      {/* {
        cources.map((course,index)=>(
          <></>
        ))
      } */}
    </div>
  );
};

export default CoursesTemplate;
