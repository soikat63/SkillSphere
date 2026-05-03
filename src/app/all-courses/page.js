import CourseCard from "@/components/CourseCard";

const AllCoursePage = async () => {
  const res = await fetch(
    "https://skill-sphere-ruby-two.vercel.app/courses.json",
  );

    const AllCourses =await res.json();
    
    console.log(AllCourses);
    

  return (
    <div className=" mt-16">
      <div className=" flex justify-between items-center">
        <h2 className=" font-bold text-4xl">Popular Courses</h2>

        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-8">
        {AllCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCoursePage;
