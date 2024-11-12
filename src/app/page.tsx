import Footer from "@/components/Footer/Footer";
import LandingCodingJourney from "@/components/Main/Hero/LandingCodingJourney";
import LandingImageOfTeachers from "@/components/Main/Hero/LandingImageOfTeachers";
import LandingIntro from "@/components/Main/Hero/LandingIntro";
import LandingYoutubeLinkButton from "@/components/Main/Hero/LandingYoutubeLinkButton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <LandingIntro />
        <LandingCodingJourney/>
        <LandingYoutubeLinkButton/>
        <LandingImageOfTeachers/>
        <Footer/>
       
      </div>
    </>
  );
};

export default page;
