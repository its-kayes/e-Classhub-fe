import { createBrowserRouter } from "react-router-dom";
import Login from "../page/auth/Login";
import Signup from "../page/auth/Signup";
import Controller from "../page/controller/Controller";
import Setting from "../page/setting/Setting";
import Classroom from "../page/per-class-room/Classroom";
import Classes from "../page/classes/Classes";
import RoomManager from "../page/per-class-room/RoomManager";
import Members from "../page/per-class-room/Members";
import NotFound from "../page/not-found/NotFound";
import Chat from "../page/chat/Chat";
import { io } from "socket.io-client";
import Private from "../page/chat/Private";
import GroupChat from "../page/chat/GroupChat";
import MentorChat from "../page/chat/MentorChat";
const socket = io("https://api.eclasshub.kayes.dev");

/* All of Routers */
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/classes",
    element: <Controller />,
    children: [
      {
        path: "/classes/",
        element: <Classes />,
      },
      {
        path: "/classes/:room",
        element: <RoomManager />,
        children: [
          {
            path: "/classes/:room",
            element: <Classroom />,
          },
          {
            path: "/classes/:room/members",
            element: <Members />,
          },
          {
            path: "/classes/:room/chat",
            element: <Private socket={socket} />,
          },
          {
            path: "/classes/:room/group-chat",
            element: <GroupChat socket={socket} />,
          },
          {
            path: "/classes/:room/chat-with-mentor",
            element: <MentorChat />,
          },
        ],
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
  {
    path: "/chat",
    element: <Chat socket={socket} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routers;
