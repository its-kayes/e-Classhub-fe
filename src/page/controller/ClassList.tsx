import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./Style.scss";

const buttons = [
  <Button
    key="Stream"
    sx={{
      textTransform: "none",
    }}
  >
    Stream
  </Button>,
  <Button
    key="Classwork"
    sx={{
      textTransform: "none",
    }}
  >
    Classwork
  </Button>,
  <Button
    key="People"
    sx={{
      textTransform: "none",
    }}
  >
    People
  </Button>,
];

export default function ClassList() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup aria-label="medium button group">{buttons}</ButtonGroup>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <div className="class-half-details">
          <div className="header">
            <p style={{ fontSize: "30px" }}> CSE 12th Final Project </p>
            <p> Mr. Emrul Kayes </p>
          </div>

          <div className="icons-box">
            <PermContactCalendarOutlinedIcon
              sx={{
                fontSize: "1.5rem",
                marginRight: "15px",
              }}
            />
            <FileCopyOutlinedIcon
              sx={{
                fontSize: "1.5rem",
                marginRight: "15px",
              }}
            />
            <MoreVertOutlinedIcon
              sx={{
                fontSize: "1.5rem",
                marginRight: "15px",
              }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}
