import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Mainpage/Header";
import Footer from "../Mainpage/Footer";
import "../Style/CourseCard.css";

function Apicall() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      if (token) {
        setLoading(true);
        try {
          const response = await axios.get("http://localhost:800/courses", {
            headers: {
              Authorization: token,
            },
          });
          setCourses(response.data.courses);
          console.log(response.data.courses);
        } catch (error) {
          console.error("Error:", error.response || error);
          setError(
            error.response ? error.response.data : "An unknown error occurred"
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="course-container">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <img
              src={course.imageUrl}
              alt={course.title}
              className="course-image"
            />
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-duration">
                Duration: {course.duration} days
              </p>
              <p className="course-instructor">
                Instructor: {course.instructor}
              </p>
              <p className="course-price">Price: ${course.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Apicall;
