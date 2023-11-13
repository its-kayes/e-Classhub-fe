import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "../controller/Style.scss";
import { PostAnnouncementImage } from "../../importer/importer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IApiResponse,
  IResponse,
  catchResponse,
} from "../../utils/catchResponse";
import { useFindClassroomMutation } from "../../store/service/classroomApi";
import { IAnnouncement, IClassroom } from "../../interface/index.global";
import { useGetAnnouncementMutation } from "../../store/service/announcement";
import { useAppSelector } from "../../store/app/hook";

export default function Classroom() {
  const [classInfo, setClassInfo] = useState<IClassroom>({} as IClassroom);
  const [announcement, setAnnouncement] = useState<IAnnouncement[]>([]);
  const { room } = useParams();
  const { email } = useAppSelector((state) => state.local.userReducer);
  const [findClassroom] = useFindClassroomMutation();
  const [getAnnouncement] = useGetAnnouncementMutation();

  useEffect(() => {
    if (!room || room === null) return;

    async function fetchData() {
      const result = await findClassroom({
        room: room?.toUpperCase(),
      });

      const announcements = await getAnnouncement({
        classCode: room?.toUpperCase(),
        email,
      });

      const announcementsResponse = catchResponse(
        announcements as unknown as IResponse
      ) as IApiResponse;

      const response = catchResponse(
        result as unknown as IResponse
      ) as IApiResponse;

      setClassInfo(response.data as IClassroom);
      setAnnouncement(announcementsResponse.data as IAnnouncement[]);
    }

    fetchData();
  }, [email, findClassroom, getAnnouncement, room]);

  console.log(announcement);

  return (
    <Box>
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
              <form>
                <textarea
                  placeholder="Announce something to your class"
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                ></textarea>

                <label
                  htmlFor="images"
                  className="drop-container"
                  id="dropcontainer"
                >
                  <span className="drop-title">
                    Drop or Click here to upload files...
                  </span>

                  <input
                    hidden
                    type="file"
                    id="images"
                    accept="image/*"
                    required
                  />
                </label>

                <button className="announcement-btn">
                  {" "}
                  <span
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span> Announcement </span>
                  </span>{" "}
                </button>
              </form>
            </div>

            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ( */}
            {announcement?.map((item) => (
              <div className="post-short-details" key={item._id}>
                <img src={PostAnnouncementImage} alt="" />
                <div>
                  <p>{item.description}</p>
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
