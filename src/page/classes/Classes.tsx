import { UserImage } from "../../importer/importer";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "./Style.scss";

export default function Classes() {
  return (
    <div className="class-list-box">
      {[1, 2, 3, 4].map(() => (
        <div className="per-class-box">
          <div className="header-box">
            <p className="title"> CSE 7th spring2023 </p>
            <p className="sub-title"> Dept of CSE and CSIT </p>
            <p className="mentor-name"> Dr. Muhammad Shakhawat Hussain</p>
          </div>

          <div className="img-box">
            <img src={UserImage} alt="" />
            <KeyboardArrowRightOutlinedIcon
              sx={{
                fontSize: "3rem",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
