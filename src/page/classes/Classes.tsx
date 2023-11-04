import "./Style.scss";
import { UserImage } from "../../importer/importer";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IResponse, catchResponse } from "../../utils/catchResponse";
import { IClassroom, IUserInfo } from "../../interface/index.global";
import Spinner from "../../elements/spinner/Spinner";
import { useClassroomListMutation } from "../../store/service/classroomApi";

export default function Classes() {
  const [allClassroomList, setAllClassroomList] = useState<IClassroom[]>([]);
  const [classroomList, { isLoading }] = useClassroomListMutation();

  useEffect(() => {
    if (allClassroomList.length > 0) return;

    async function fetchData() {
      const userInfo: IUserInfo = JSON.parse(
        localStorage.getItem("userInfo") || "{}"
      );

      const result = await classroomList({
        email: userInfo.email,
        type: userInfo.type,
      });

      const response = catchResponse(result as unknown as IResponse);
      setAllClassroomList(response as IClassroom[]);
    }

    fetchData();
  }, [allClassroomList.length, classroomList]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="class-list-box">
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => ( */}
      {allClassroomList?.map((item) => (
        <Link
          to={`/classes/${item.classCode.toLowerCase()}`}
          key={item.classCode}
        >
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
