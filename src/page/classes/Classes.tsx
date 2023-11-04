import "./Style.scss";
import { UserImage } from "../../importer/importer";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IApiResponse,
  IResponse,
  catchResponse,
} from "../../utils/catchResponse";
import { IClassroom } from "../../interface/index.global";
import Spinner from "../../elements/spinner/Spinner";
import { useClassroomListMutation } from "../../store/service/classroomApi";
import { useAppSelector } from "../../store/app/hook";

export default function Classes() {
  const [allClassroomList, setAllClassroomList] = useState<IClassroom[]>([]);
  const [classroomList, { isLoading }] = useClassroomListMutation();
  const { type, email } = useAppSelector((state) => state.local.userReducer);

  useEffect(() => {
    if (allClassroomList.length > 0) return;

    async function fetchData() {
      const result = await classroomList({
        email: email,
        type: type,
      });

      const response = catchResponse(
        result as unknown as IResponse
      ) as IApiResponse;

      setAllClassroomList(response.data as IClassroom[]);
    }

    fetchData();
  }, [allClassroomList.length, classroomList, email, type]);

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
