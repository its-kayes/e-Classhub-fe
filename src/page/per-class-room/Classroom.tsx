import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
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

  // Get the file name from the url
  const fileName = (url: string) => {
    const parts = url.split("/");
    const fileNamePart = parts[3];

    // Remove "ux28-test-7no5_" from the fileNamePart
    const cleanedFileName = fileNamePart.replace("ux28-test-7no5_", "");

    // Capitalize the first letter of the remaining string
    const finalFileName =
      cleanedFileName.charAt(0).toUpperCase() + cleanedFileName.slice(1);

    return finalFileName;
  };

  // Download the file
  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a link element
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;

      // Trigger the download automatically
      link.click();

      // Clean up
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

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
                <div className="header">
                  <div className="title">
                    <img src={PostAnnouncementImage} alt="" />
                    <div className="sub-title">
                      <p className="name"> Emrul Kayes </p>

                      <p className="date"> Sep 15, 2023 </p>
                    </div>
                  </div>
                  <MoreVertOutlinedIcon />
                </div>
                <div>
                  <p className="description">{item.description}</p>
                </div>

                <div className="martial-section">
                  {item.materials?.map((material) => (
                    <div key={material._id} className="martial-box">
                      <div className="img-section">
                        <img src={PostAnnouncementImage} alt="" />
                      </div>
                      <div className="title-section">
                        <p className="name"> {fileName(material.url)} </p>
                        <p> {material?.url?.split(".")[4]?.toUpperCase()} </p>
                      </div>
                      <div className="action-section">
                        <CloudDownloadOutlinedIcon
                          onClick={() =>
                            handleDownload(
                              material.url as string,
                              fileName(material.url) as string
                            )
                          }
                        />

                        <LaunchOutlinedIcon
                          sx={{
                            fontSize: "1.4rem",
                          }}
                          onClick={() => window.open(material.url)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
