import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
      color: "black",
    }}
  >
    Stream
  </Button>,
  <Button
    key="Classwork"
    sx={{
      textTransform: "none",
      color: "black",
    }}
  >
    Classwork
  </Button>,
  <Button
    key="People"
    sx={{
      textTransform: "none",
      color: "black",
    }}
  >
    People
  </Button>,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ClassList() {
  return (
    <Box>
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
      </Box>

      {/* Short Class details */}

      <Box
        sx={{
          width: "100%",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <div className="class-half-details" style={{ marginBottom: "20px" }}>
            <div className="header">
              <p style={{ fontSize: "25px" }}> CSE 12th Final Project </p>
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
        ))}
      </Box>

      {/* Class list */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <div className="announcement-writing-box">
              <img src="/src/assets/kayes.jpg" alt="" />
              <input
                type="text"
                placeholder="Announce something to your class"
              />
            </div>

            <div className="post-short-details">
              <img src="/src/assets/monitor.png" alt="" />
              <div>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate laudantium laboriosam eius? Esse, in laborum
                  laboriosam eius? Esse, in laborum!
                </p>
              </div>
              <MoreVertOutlinedIcon />
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="upcoming-box">
              <p className="title">Upcoming</p>
              <p className="sub-title">Wohooooo, no work due soon!</p>
              <span> View All </span>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
