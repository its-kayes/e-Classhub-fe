import { Box } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Link, Outlet, useParams } from "react-router-dom";

export default function RoomManager() {
  const { room } = useParams();
  const buttons = [
    <Link to={`/classes/${room}`}>
      <Button
        key="Stream"
        sx={{
          textTransform: "none",
          color: "black",
          "&:active": {
            backgroundColor: "#1C64F2",
            color: "white",
          },
        }}
      >
        Stream
      </Button>
    </Link>,
    <Link to={`/classes/${room}/members`}>
      <Button
        key="People"
        sx={{
          textTransform: "none",
          color: "black",
          "&:active": {
            backgroundColor: "#1C64F2",
            color: "white",
          },
        }}
      >
        Members
      </Button>
    </Link>,
    <Link to={`/classes/${room}/chat-with-mentor`}>
      <Button
        key="chat-with-mentor"
        sx={{
          textTransform: "none",
          color: "black",
          "&:active": {
            backgroundColor: "#1C64F2",
            color: "white",
          },
        }}
      >
        Chat with Mentor
      </Button>
    </Link>,
    <Link to={`/classes/${room}/group-chat`}>
      <Button
        key="group-chat"
        sx={{
          textTransform: "none",
          color: "black",
          "&:active": {
            backgroundColor: "#1C64F2",
            color: "white",
          },
        }}
      >
        Group Chat
      </Button>
    </Link>,
    <Button
      key="People"
      sx={{
        textTransform: "none",
        color: "black",
        "&:active": {
          backgroundColor: "#1C64F2",
          color: "white",
        },
      }}
    >
      Meet now
    </Button>,
  ];
  return (
    <div>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
          marginBottom: "20px",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup aria-label="medium button group">{buttons}</ButtonGroup>
      </Box>{" "}
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}
