import CoursesTemplate from "@/components/Utility/CoursesTemplate";
import React from "react";

const page = () => {
  
  return (
    <div className="grid grid-flow-row grid-cols-2 mx-8 mt-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-12 ">
      <CoursesTemplate/>
    </div>
  );
};

export default page;
