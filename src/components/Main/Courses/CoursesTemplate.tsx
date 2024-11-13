"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface Courses {
  courseShort: string;
  coursesName: string;
  tutor: string;
  accessibility: string;
  playListLink: string;
}

const CoursesTemplate = ({
  courseShort,
  coursesName,
  tutor,
  accessibility,
  playListLink,
}: Courses) => {
  const routerPlaylist = useRouter();
  const HandleNavigationToPlayList = () => {
    routerPlaylist.push(playListLink);
  };
  return (
    <div className="dark:bg-[#333333] bg-[#F0F0F0 ] border-2 border-[#DDDDDD] dark:border-[#333333] mt-14 mx-5 p-4 rounded-xl grid grid-flow-row grid-cols-1 sm:grid-cols-2">
      <div className="flex">
        <img src={`/${courseShort}.jpg`} className="rounded-xl " alt="" />
      </div>
      <div className="sm:mx-5">
        <h1 className="text-xl   dark:text-[#FFFFFF] text-[#000000] my-3 l">
          {coursesName}{" "}
        </h1>
        <h1 className="text-lg  mt-2 dark:text-[#cccccc] text-[#333333]    ">
          by - {tutor}{" "}
        </h1>
        <h1 className="text-md  mt-2 dark:text-[#97863b] text-[#333333] l ">
          {accessibility}{" "}
        </h1>
        <button
          className="text-white bg-red-600 border-2 border-red-600 px-4 py-2 my-2 rounded-xl hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-600
          "
          onClick={HandleNavigationToPlayList}
        >
          Playlist{" "}
        </button>
      </div>
    </div>
  );
};

export default CoursesTemplate;
