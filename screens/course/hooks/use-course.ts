import { coursesMock } from "@/screens/home/data/mock_course";
import { useMemo } from "react";

interface UseCourseProps {
  id?: string;
}

export const useCourse = ({ id }: UseCourseProps) => {
  const course = useMemo(() => {
    return coursesMock.filter((course) => course.id === id);
  }, [id]);

  return {
    data: course[0],
  };
};
