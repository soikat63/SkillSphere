import { Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    
    <Card className="w-full h-full border flex flex-col shadow-sm">
      <div className="relative h-[250px] shrink-0 overflow-hidden rounded-t-2xl">
        <img
          alt={course.title}
          className="w-full h-full object-cover"
          loading="lazy"
          src={course.image}
        />
      </div>

      
      <div className="p-4 flex flex-1 flex-col justify-between gap-3">
        <div>
          <h3 className="font-bold text-2xl line-clamp-2">{course.title}</h3>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-row justify-between items-center w-full py-3">
            <span className="text-sm font-medium text-foreground">
              {course.instructor}
            </span>
            <span className="text-xs font-bold">{course.rating}</span>
          </div>

          <Link href={`course-details/${course.id}`} >
          <Button color="primary" className="w-full font-semibold">
            View details
          </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
