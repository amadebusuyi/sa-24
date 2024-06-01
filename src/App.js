import { useRoutes } from "react-router-dom";

import routes from "./routes";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <main>
        {/* You can use by useRoutes like this (I prefer it): */}
        {routeResult}
        {/* <Routes /> */}
      </main>
    </>
  );
}

export default App;
