import LandingCodingJourney from "@/components/Main/LandingCodingJourney";
import LandingImageOfTeachers from "@/components/Main/LandingImageOfTeachers";
import LandingIntro from "@/components/Main/LandingIntro";
import LandingYoutubeLinkButton from "@/components/Main/LandingYoutubeLinkButton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <LandingIntro />
        <LandingCodingJourney/>
        <LandingYoutubeLinkButton/>
        <LandingImageOfTeachers/>
       
      </div>
    </>
  );
};

export default page;
