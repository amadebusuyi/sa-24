import styled from "styled-components";
import Navbar from "../components/Navbar";
import heroImg from "../images/herobg.png";
import heroMob from "../images/hero-mob.png";
import riseBig from "../images/rise-big.png";
import banner from "../images/banner.png";
import icon from "../images/star-icon.png";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Data from "../data";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const words = [
    'Godliness',
    'Entrepreneurship',
    'Creative',
    'Good Success',
  ];

  let x = 1000;
  let y = 0;
  while(x > 0) {
    words.push(words[y]);
    x -= 1;
    if (y === 3) y = 0;
    else y += 1;
  }
  return (<>
      <Header>
        <Navbar />
        <Rise>
          <img src={riseBig} alt="" />
        </Rise>
        <Banner>
          <img src={banner} alt="" />
        </Banner>
      </Header>
      <Slider>
          <Box>
            <div className="scroll-control">
              { words.map((word, index) => {
                return (
                  <div key={index}>
                    <img src={icon} alt="" />
                    <h1>{word}</h1>
                  </div>
                )
              }) }
            </div>
          </Box>
      </Slider>
      <About title="GRTM SUMMER ACADEMY" info={[
        "Learn the skills and knowledge you need to succeed in today's ever changing world.",
        "With a variety of vocational trainings, courses and workshops in Arts, Technology, Leadership, Communication, Emotional Intelligence, Service and Godliness.",
        "we will help you thrive in all aspects of life."
      ]} />
      <Courses>
        <h1>OUR COURSES</h1>
        <CourseList>
          {Data.Courses.map((course, index) => {
            return(
              <Course key={index}>
                <img src={course.img} alt="" />
                <p><NavLink className="link" to={`courses/${course.key}`}>{course.title}</NavLink></p>
              </Course>
            )
          })}
        </CourseList>
      </Courses>
      <Testimonials testimonies={Data.Testimonials} />
      <Footer />
    </>
  );
}

const Header = styled.div`
  background: url(${heroImg});
  background-size: cover;
  height: calc(100vw * 0.7);
  width: 100vw;
  @media (max-width: 768px) {
    background: url('${heroMob}');
    background-size: cover;
    height: 100vh;
  }
`;

const Rise = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  img {
    width: 65%;
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  img {
    width: 65%;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

const Slider = styled.div`
  background: #000;
  height: 280px;
  padding: 50px 0;
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  height: 80px;
  @media (max-width: 768px) {
    height: 60px;
  }
  rotate: 3deg;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  overflow-x: hidden;
  .scroll-control {
    min-width: 300vw;
    animation: scroll-left 3500s linear infinite;
    @keyframes scroll-left {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-100%);
        }
    }
  }
  div {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    img {
      height: 20px;
      position: relative;
      margin: 10px;
      @media (max-width: 768px) {
        height: 16px;
      }
    }
    h1 {
      font-size: 32px;
      @media (max-width: 768px) {
        font-size: 24px;
      }
      text-transform: uppercase;
      color: white;
      font-weight: 800;
      margin: 10px;
      font-family: 'Monument Extended';
      letter-spacing: 0.2rem;
    }
  }
`;

const Courses = styled.div`
  display: flex;
  padding: 100px 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: white;
  }
`;

const CourseList = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Course = styled.div`
  display: flex;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  flex-direction: column;
  justify-content: space-round;
  margin: 25px;
  margin-bottom: 100px;
  width: 22.8rem;
  @media (max-width: 768px) {
    padding: 20px;
  }
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: white;
  }
  p {
    margin-top: 20px;
    font-size: 1.2rem;
    .link{
      &:hover, &:active {
        text-decoration: none;
      }
    }
  }
`;
