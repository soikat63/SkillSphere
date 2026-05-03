import CourseCard from "@/components/CourseCard";
import Category from "@/components/Category";
import SearchBar from "@/components/SearchBar";

const AllCoursePage = async ({ searchParams }) => {
  const params = await searchParams;
  const selectedCategory = params?.category;
  const searchQuery = params?.search?.toLowerCase() || "";

  const res = await fetch(
    "https://skill-sphere-ruby-two.vercel.app/courses.json",
  );
  const allCourses = await res.json();

  const categories = [...new Set(allCourses.map((course) => course.category))];

  const filteredCourses = allCourses
    .filter((course) =>
      selectedCategory
        ? course?.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true,
    )
    .filter((course) =>
      searchQuery
        ? course.title.toLowerCase().includes(searchQuery) ||
          course.instructor.toLowerCase().includes(searchQuery)
        : true,
    );

  return (
    <div className="mt-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-4xl">All Courses</h2>
      </div>

      
      <div className="flex flex-col justify-between  sm:flex-row items-center gap-4 mt-4">
        <SearchBar />
        <Category categories={categories} />
      </div>

      {/* --- Search result count --- */}
      {searchQuery && (
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold text-gray-800">
            {filteredCourses.length}
          </span>{" "}
          result{filteredCourses.length !== 1 ? "s" : ""} for{" "}
          <span className="font-semibold text-gray-800">"{params.search}"</span>
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-400 text-sm mb-2">No courses found.</p>
            <a
              href="/all-courses"
              className="text-sm text-blue-500 hover:underline"
            >
              Clear all filters
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCoursePage;