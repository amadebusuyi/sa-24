import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="courses/:courseId">
        <Route index element={<Course />} />
      </Route>
    </BaseRoutes>
  );
}
