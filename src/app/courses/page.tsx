import CoursesTemplate from "@/components/Main/Courses/CoursesTemplate";
import React from "react";
interface Course {
  courseShort: string;
  coursesName: string;
  tutor: string;
  accessibility: string;
  playListLink: string;
}
const page = () => {
  const CoursesInfo: Course[] = [
    {
      courseShort: "DemoCourseThumbnil",
      // courseShort: "Cpp",
      coursesName: "C++ for Beginner (Full Course)",
      tutor: "Sachin Kumar",
      accessibility: "FREE",
      playListLink:
        "https://www.youtube.com/playlist?list=PL5s0B1GkJpLQePV4BuU5foGmlTJc65oQt",
    },
    {
      courseShort: "DemoCourseThumbnil",
      // courseShort: "Java",
      coursesName: "Java for Beginner (Full Course)",
      tutor: "Chaitanya Sharma",
      accessibility: "FREE",
      playListLink:
        "https://www.youtube.com/playlist?list=PL5s0B1GkJpLRQlaIp7MzSB4d9LBY6Hm1m",
    },
    {
      courseShort: "DemoCourseThumbnil",
      // courseShort: "Python",
      coursesName: "The Ultimate Python for Beginner (Full Course)",
      tutor: "Aditya Patil",
      accessibility: "FREE",
      playListLink:
        "https://www.youtube.com/playlist?list=PL5s0B1GkJpLT2M1QZh8PCLYCsRCVu3hWR",
    },
  ];
  return (
    <>
      <div className="grid grid-flow-row lg:grid-cols-3">
        {CoursesInfo.map((course, key) => (
          <CoursesTemplate
            key={key}
            courseShort={course.courseShort}
            coursesName={course.coursesName}
            accessibility={course.accessibility}
            tutor={course.tutor}
            playListLink={course.playListLink}
          />
        ))}

      </div>
    </>
  );
};

export default page;
