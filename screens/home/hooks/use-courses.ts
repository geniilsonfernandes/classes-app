import { useMemo, useState } from "react";
import { filtersCourses } from "../data/filters";
import { Course } from "../types";


type CousesFilter = (typeof filtersCourses)[number];

interface UseCoursesProps {
  initialCoursesFilter?: Course[];
}

export const useCourses = ({ initialCoursesFilter }: UseCoursesProps) => {
  const [filterby, setFilterby] = useState<CousesFilter>("All");
  const [search, setSearch] = useState("");

  const handleSetFilterby = (filterby: CousesFilter) => {
    setFilterby(filterby);
  };

  const courses = useMemo(() => {
    return initialCoursesFilter?.filter((course) => {
      if (filterby !== "All") {
        return course.tags.includes(filterby);
      }
      if (search) {
        return course.title.toLowerCase().includes(search.toLowerCase());
      }
      return course;
    });
  }, [filterby, initialCoursesFilter, search]);

  return {
    courses: courses,
    setFilterby: handleSetFilterby,
    filterby,
    search,
    setSearch,
  };
};
