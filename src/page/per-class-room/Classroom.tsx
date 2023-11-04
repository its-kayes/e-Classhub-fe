import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "../controller/Style.scss";
import { PostAnnouncementImage, UserImage } from "../../importer/importer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IResponse, catchResponse } from "../../utils/catchResponse";
import { useFindClassroomMutation } from "../../store/service/classroomApi";
import { IClassroom } from "../../interface/index.global";

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

export default function Classroom() {
  const [classInfo, setClassInfo] = useState<IClassroom>({} as IClassroom);
  const { room } = useParams();
  const [findClassroom] = useFindClassroomMutation();

  useEffect(() => {
    if (!room || room === null) return;

    async function fetchData() {
      // const userInfo: IUserInfo = JSON.parse(
      //   localStorage.getItem("userInfo") || "{}"
      // );

      const result = await findClassroom({
        room: room?.toUpperCase(),
      });

      const response = catchResponse(result as unknown as IResponse);
      setClassInfo(response as IClassroom);
    }

    fetchData();
  }, [findClassroom, room]);

  console.log(classInfo);

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
        <div className="class-half-details" style={{ marginBottom: "20px" }}>
          <div className="header">
            <p style={{ fontSize: "25px" }}> {classInfo.className} </p>
            <p> {classInfo.shortTitle} </p>
            <div className="sub-title-box">
              <p> {classInfo.mentorName} </p>
              <p className="class-code"> {classInfo.classCode} </p>
            </div>
          </div>

          <div className="icons-box">
            <PermContactCalendarOutlinedIcon
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

      {/* Class list */}

      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <div className="announcement-writing-box">
              <img src={UserImage} alt="" />
              <input
                type="text"
                placeholder="Announce something to your class"
              />
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div className="post-short-details" key={item}>
                <img src={PostAnnouncementImage} alt="" />
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
            ))}
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
