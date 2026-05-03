import { Button, Card, CloseButton } from '@heroui/react';
import React from 'react';

const CourseCard = ({course}) => {
    return (
      <div>
        <Card className="w-full border">
          <div className="relative h-[350px] w-[350px] shrink-0 overflow-hidden rounded-2xl ">
            <img
              alt="fdgfd"
              className="w-full h-full object-cover"
              loading="lazy"
              src={course.image}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-8 font-bold text-2xl ">
                {course.title}{" "}
              </Card.Title>
            </Card.Header>
            <Card.Footer className=" flex flex-col items-start">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">
                  {course.instructor}
                </span>
                            <span className="text-xs text-muted">{course.rating}</span>
              </div>
              <Button className="w-full ">View details</Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    );
};

export default CourseCard;