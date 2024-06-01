import Home from "../pages/Home";
import Course from "../pages/Course";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "courses/:courseId",
    element: <Course />,
  },
];

export default mainRoutes;
