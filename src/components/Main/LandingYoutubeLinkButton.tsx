"use client";

const LandingYoutubeLinkButton = () => {
  const lightButtonClass =
    "text-white bg-red-600 border-2 border-red-600 px-4 py-2 rounded-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-600";
  //
  const darkButtonClass =
    "text-white bg-red-500 border-2 border-red-500 px-4 py-2 rounded-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-600";
  return (
    <div className="grid place-content-center mt-5">
      <button
        className={`${lightButtonClass} ${darkButtonClass} `}
        onClick={() => {
          window.open('https://www.youtube.com/@EducationPointCoding','_blank')
        }}
      >
        Youtube Channel
      </button>
    </div>
  );
};

export default LandingYoutubeLinkButton;
