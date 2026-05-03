import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

// level badge color
function getLevelStyle(level) {
  const styles = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-red-100 text-red-700",
  };
  return styles[level] || "bg-gray-100 text-gray-600";
}

// star rating display
function StarRating({ rating }) {
  return (
    <span className="flex items-center gap-1">
      <span className="text-amber-400 text-sm">
        {"★".repeat(Math.round(rating))}
        {"☆".repeat(5 - Math.round(rating))}
      </span>
      <span className="text-sm text-gray-500">{rating}</span>
    </span>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium flex-shrink-0">
      {initials}
    </div>
  );
}

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://skill-sphere-ruby-two.vercel.app/courses.json",
  );
  const allCourses = await res.json();

  const course = allCourses.find((c) => c.id === Number(id));

  // fall back
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6">
          {/* --- Icon circle --- */}
          <div className="w-20 h-20 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="11" />
              <line x1="11" y1="14" x2="11.01" y2="14" />
            </svg>
          </div>

          {/* --- Message --- */}
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Course not found
          </h1>
          <p className="text-sm text-gray-400 mb-7">
            The course you're looking for doesn't exist or has been removed.
          </p>

          <Link
            href="/all-courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <MdArrowBack size={18} />
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen   mt-7">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link
          href="/all-courses"
          className="inline-flex items-center gap-1.5 text-sm text-gray hover:text-gray-600 transition-colors mb-6"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to courses
        </Link>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-6">
          {/*Course thumbnail image */}
          <div className="relative w-full h-[200px]  md:h-[500px] ">
            <Image
              src={course.image}
              alt={course.imageAlt || course.title}
              fill
              className="object-cover"
                          priority
                          
            />
          </div>

          <div className="p-6">
            {/* Category badge*/}
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 mb-3">
              {course.category}
            </span>

            {/* Course title */}
            <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
              {course.title}
            </h1>

            {/* Description  */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {course.description}
            </p>

            {/*  rating, students, duration, level */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <StarRating rating={course.rating} />
              <span>{course.students.toLocaleString()} students</span>
              <span>{course.duration}</span>
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getLevelStyle(course.level)}`}
              >
                {course.level}
              </span>
            </div>
          </div>
        </div>

        {/* TWO COLUMN LAYOUT: Curriculum (left)  Sidebar (right)*/}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
          {/* --- LEFT: Curriculum list --- */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Course curriculum
            </h2>
            <ul className="divide-y divide-gray-50">
              {course.curriculum.map((topic, index) => (
                <li key={index} className="flex items-center gap-3 py-3">
                  <span className="text-xs text-gray-300 min-w-[20px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-300 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  <span className="text-sm text-gray-600">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/*  RIGHT: Sidebar  */}
          <div className="flex flex-col gap-4">
            {/*  Enroll / pricing card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl font-bold text-gray-900 mb-4">
                $49.99
              </div>
              <button className="w-full py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors mb-4">
                Enroll now
              </button>
              <div className="space-y-3">
                {[
                  { label: "Duration", value: course.duration },
                  { label: "Level", value: course.level },
                  {
                    label: "Students",
                    value: course.students.toLocaleString(),
                  },
                  { label: "Rating", value: `${course.rating} / 5` },
                  {
                    label: "Lessons",
                    value: `${course.curriculum.length} topics`,
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Instructor
              </h2>
              <div className="flex items-center gap-3 mb-2">
                <Avatar name={course.instructor} />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {course.instructor}
                  </p>
                  <p className="text-xs text-gray-400">Course instructor</p>
                </div>
              </div>
              <span className="text-xs text-gray bg-blue-100 px-3 py-1.5 rounded-lg inline-block mt-1">
                {course.students.toLocaleString()} students enrolled
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
