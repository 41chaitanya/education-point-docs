const LandingCodingJourney = () => {
  return (
    <>
      <div className="dark:bg-[#333333] bg-[#F0F0F0 ] border-2 border-[#DDDDDD] dark:border-[#333333] mt-14 mx-5 p-4 rounded-xl h-[350px]">
        <h1 className="text-2xl  text-center  dark:text-[#FFFFFF] text-[#000000] lg:text-left  lg:mx-60   lg:text-[40px] lg:w-80  ">
          {" "}
          <div className="py-2">Explore the</div>
          <div className="py-2"> World of Coding</div>
        </h1>
        <p className="text-md flex   text-center mt-5 dark:text-[#CCCCCC] text-[#333333] lg:text-left  lg:mx-60 lg:w-[500px]">
          Start your coding journey today with our easy-to-understand courses,
          designed for learners of all levels. We simplify complex tech concepts
          so you can learn and grow at your own pace!{" "}
        </p>
        <h2
            className={`text-md sm:text-center  lg:text-left lg:mx-60 mt-5 dark:text-[#CCCCCC] text-[#333333] `}
          >
            – Education Point Team
          </h2>
      </div>
      <div className="iconResponce:block hidden xl:w-52 xl:absolute top-[490px] right-[220px]">
        <img
          src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/b0bc916b_0829_48d0_b214_f3e8a0a35bc8.jpeg"
          className="transition-all duration-300 translate-y-6 border-2 rounded-full shadow-lg aspect-square hover:scale-90 "
          alt=""
        />
        <div className="mt-10">
          <h1
            className={`text-center text-md   dark:text-[#FFFFFF] text-[#000000] `}
          >
            Mr.Irfan Raza
          </h1>
          <h2
            className={`text-md  text-center mt-5 dark:text-[#CCCCCC] text-[#333333] `}
          >
            ( Founder & CEO )
          </h2>
        </div>
      </div>
    </>
  );
};

export default LandingCodingJourney;
