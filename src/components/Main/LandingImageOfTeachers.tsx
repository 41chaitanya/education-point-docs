import React from "react";
import Image from "next/image";

const LandingImageOfTeachers = () => {
  const imageClassTCSS = "aspect-square scale-75 rounded-full ";
  const nameClassTCSS = "text-center text-2xl";
  return (
    <div>
      {/* <Image
        src="" // External image URL
        alt="A descriptive alt text for the image"
        width={500} // Width of the image
        height={300} // Height of the image
        className={`${imageClassTCSS}`}
      /> */}
      <img
        src="https://www.looper.com/img/gallery/what-only-british-fans-of-the-boys-notice-about-billy-butcher/l-intro-1614788163.jpg"
        alt=""
        className={`${imageClassTCSS}`}
      />
      <h1 className={`${nameClassTCSS} `}>william butcher</h1>
      <img
        src="https://i.tribune.com.pk/media/images/Screen-Shot-2024-06-23-at-1-41-38-PM1719132368-0/Screen-Shot-2024-06-23-at-1-41-38-PM1719132368-0.png"
        alt=""
        className={`${imageClassTCSS}`}
      />
      <h1 className={`${nameClassTCSS} `}>homelander</h1>
      <img
        src="https://i.pinimg.com/564x/b0/46/53/b046534afb5ff539f8cf3b26613c793b.jpg"
        alt=""
        className={`${imageClassTCSS}`}
      />
      <h1 className={`${nameClassTCSS} `}>soilder boy</h1>
    </div>
  );
};

export default LandingImageOfTeachers;
