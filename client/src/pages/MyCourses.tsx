import { useEffect, useState } from "react";
import axios from "axios";
import MultiActionAreaCard from "../components/CourseCard";
import { BASE_URL } from "../../config";
import userEmailState from "../store/selectors/userEmail";
import { useRecoilValue } from "recoil";

type coursetype = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
};

const MyCourses = () => {
  const [courses, setCourses] = useState<coursetype[]>([]);
  const userEmail = useRecoilValue(userEmailState);
  // const token = localStorage.getItem("acessToken");
  // console.log(token);

  const findCourses = async () => {
    const res = await axios.get(
      // "https://learnit-api.onrender.com/courses/mycourses",

      `${BASE_URL}/courses/mycourses/${userEmail}`
      // {
      //   params: {
      //     userEmail: userEmail,
      //   },
      // }
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     // userEmail,
      //   },
      //   withCredentials: true,
      // }
    );
    setCourses(res.data.purchasedCourses);
  };

  useEffect(() => {
    findCourses();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-4xl">
        <h1>Your Purchased Courses</h1>
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

export default MyCourses;
