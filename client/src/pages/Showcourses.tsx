import React, { useEffect, useState } from "react";
import axios from "axios";
import MultiActionAreaCard from "../components/CourseCard";

type coursetype = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
};

const ShowCourses = () => {
  const [courses, setCourses] = useState<coursetype[]>([]);

  const findCourses = async () => {
    const res = await axios.get("https://learnit-api.onrender.com/courses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("acessToken"),
      },
      withCredentials: true,
    });
    setCourses(res.data.courses);
  };

  useEffect(() => {
    findCourses();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-4xl">
        <h1>Start Learning Today</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {courses.map((course) => {
            return <MultiActionAreaCard course={course} key={course._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ShowCourses;
