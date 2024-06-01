import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import rise from "../images/rise.png";
import heroBg from "../images/hero-tab.png";
import heroMob from "../images/hero-mob.png";
import Data from "../data";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Facilitators from "../components/Facililators";
import Footer from "../components/Footer";


const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(false);
  const [testimonies, setTestimonies] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const course_ = Data.Courses.find((c) => c.key === courseId);
    if (!course_) { window.location = '../../'; }
    else setCourse(course_)
    setTestimonies(Data.Testimonials.filter((x) => x.key === courseId));
  }, [courseId, navigate]);
  return (
    <Wrapper>
      <div className="wrapper">
        <Navbar />
          {
            course && <>
              <Header>
                <div className="rise-div">
                  <img className="rise" src={rise} alt="" />
                </div>
                  <CourseInfo>
                    <h1>{course.title} course</h1>
                    <img src={course.img} alt="" />
                  </CourseInfo>
              </Header>
              <About title={'About this course'} info={course.desc.split('.').filter((x) => x).map((x) => { x += '.'; return x; })} />
              <Facilitators title={'Meet the facilitators'} desc={'​​Learn from our experts who have a proven track record of success and are committed to empowering teenagers in the field.'} data={course.tutors} />
              {testimonies.length > 0 && <Testimonials testimonies={testimonies} />}
              <Footer />
            </>
          }
      </div>
    </Wrapper>
  );
}

export default Course;

const Wrapper = styled.div`
  background: black;
  .wrapper {
    background: url('${heroBg}');
    background-size: contain;
    @media (max-width: 767px) {
      background: url('${heroMob}');
      background-size: contain;
    }
  }
  @media (max-width: 767px) {
    .apply-button {
      display: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  .rise-div {
    display: flex;
    justify-content: center;
    img {
      height: 60px;
    }
  }
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 8rem;
  @media (max-width: 768px) {
      padding: 50px 20px;
    }
  h1 {
    color: #fff;
    font-size: 5rem;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    background: #fff;
    margin: 20px 8rem;
    border-radius: 25px;
    @media (max-width: 768px) {
      margin: 20px 20px;
      border-radius: 10px;
    }
  }
`;