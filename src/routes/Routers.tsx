import { createBrowserRouter } from "react-router-dom";
import Login from "../page/auth/Login";
import Signup from "../page/auth/Signup";
import Home from "../page/home/Home";

/* All of Routers */
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

export default routers;
