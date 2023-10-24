import { createBrowserRouter } from "react-router-dom";
import Login from "../page/auth/Login";
import Signup from "../page/auth/Signup";
import Home from "../page/home/Home";
import Controller from "../page/controller/Controller";
import ClassList from "../page/controller/ClassList";
import Setting from "../page/setting/Setting";

/* All of Routers */
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/classes",
    element: <Controller />,
    children: [
      {
        path: "/classes/",
        element: <ClassList />,
      },
      {
        path: "/classes/setting",
        element: <Setting />,
      },
    ],
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
