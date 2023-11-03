import "./Style.scss";
import { UserImage } from "../../importer/importer";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMentorClassroomListMutation } from "../../store/service/classroomApi";
import { IResponse, catchResponse } from "../../utils/catchResponse";
import { IClassroom, IUserInfo } from "../../interface/index.global";
import Spinner from "../../elements/spinner/Spinner";

export default function Classes() {
  const [classroomList, setClassroomList] = useState<IClassroom[]>([]);
  const [mentorClassroomList, { isLoading }] = useMentorClassroomListMutation();

  useEffect(() => {
    if (classroomList.length > 0) return;

    async function fetchData() {
      const userInfo: IUserInfo = JSON.parse(
        localStorage.getItem("userInfo") || "{}"
      );

      const result = await mentorClassroomList(userInfo.email);
      const response = catchResponse(result as unknown as IResponse);
      setClassroomList(response as IClassroom[]);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="class-list-box">
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => ( */}
      {classroomList.map((item) => (
        <Link to={`/classes/classroom-${item}`}>
          <div className="per-class-box">
            <div className="header-box">
              <p className="title"> {item.className} </p>
              <p className="sub-title"> {item.shortTitle} </p>
              <p className="mentor-name"> {item.mentorName} </p>
            </div>

            <div className="img-box">
              <img src={UserImage} alt="" />

              <KeyboardArrowRightOutlinedIcon
                sx={{
                  fontSize: "3rem",
                  color: "black",
                }}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
