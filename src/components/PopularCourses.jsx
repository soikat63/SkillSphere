import { Button } from "@heroui/react";
import CourseCard from "./CourseCard";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const PopularCourses = async () => {
  const res = await fetch("https://skill-sphere-ruby-two.vercel.app/courses.json");
  const courses = await res.json();
  const courseSlice = await courses.slice(0, 3);
  //   console.log(courses);

  return (
    <div className=" mt-16">
      <div className=" flex justify-between items-center">
        <h2 className=" font-bold text-4xl">Popular Courses</h2>

        <Link href="/all-courses">
          <Button>
            View All Courses <GoArrowRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-8">
        {courseSlice.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
