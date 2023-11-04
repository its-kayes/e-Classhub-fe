import { Box } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const buttons = [
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
  </Button>,
  <Button
    key="Classwork"
    sx={{
      textTransform: "none",
      color: "black",
      "&:active": {
        backgroundColor: "#1C64F2",
        color: "white",
      },
    }}
  >
    Classwork
  </Button>,
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
    People
  </Button>,
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
    Chat with Mentor
  </Button>,
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
    Group Chat
  </Button>,
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

export default function RoomManager() {
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
    </div>
  );
}
