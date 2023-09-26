import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";

/* All of Routers */
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default routers;
