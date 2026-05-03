import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch(
    "https://skill-sphere-ruby-two.vercel.app/courses.json",
  );
  const courses = await res.json();
  console.log(courses);

  return (
    <div className=" mt-7">
      <h2 className=" font-bold text-4xl">Popular Courses</h2>

      <div className=" grid grid-cols-3 gap-4 items-stretch ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;