// import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import { Divider } from "@mui/material";
import "../../page/setting/Style.scss";
import { useAppSelector } from "../../store/app/hook";
import { useEffect, useState } from "react";
import { useLogInfoMutation } from "../../store/service/trackerApi";
import {
  IApiResponse,
  IResponse,
  catchResponse,
} from "../../utils/catchResponse";
import { ITracker } from "../../interface/index.global";
import { dateConverter } from "../../utils/dateConverter";

export default function SessionsInfo() {
  const [userLogInfo, setUserLogInfo] = useState<ITracker[]>([]);
  const { email } = useAppSelector((state) => state.local.userReducer);
  const [logInfo] = useLogInfoMutation();

  useEffect(() => {
    async function fetchData() {
      const result = await logInfo({ email });
      const response = catchResponse(result as IResponse) as IApiResponse;
      if (response.success) setUserLogInfo(response.data as []);
    }

    fetchData();
  }, [email, logInfo]);

  // console.log(userLogInfo);

  return (
    <div className="sessions-info-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "15px",
          marginTop: "50px",
        }}
      >
        Sessions
      </p>

      <div className="account-box">
        {/* <div className="per-account-box">
          <div className="header-box">
            <div className="icon">
              <StayCurrentPortraitOutlinedIcon />
            </div>
            <div className="title-box">
              <p>Rome 24.456.355.98</p>
              <p className="no-link">Safari on iPhone</p>
            </div>
          </div>

          <div className="btn">
            <button> Revoke </button>
          </div>
        </div>

        <Divider
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
          }}
        /> */}

        {userLogInfo &&
          (userLogInfo as []).map((item: ITracker) => (
            <>
              <div className="per-account-box">
                <div className="header-box">
                  <div className="icon">
                    <DesktopWindowsRoundedIcon />
                  </div>
                  <div className="title-box">
                    <p>
                      {" "}
                      {item?.os?.name} ({item?.cpu?.architecture}){" "}
                      {item?.os?.version}
                    </p>
                    <p className="no-link">
                      {" "}
                      {item?.browser?.name} {item?.browser?.version} at{" "}
                      {dateConverter(item.date as string)}
                    </p>
                  </div>
                </div>

                <div className="btn">
                  <button> Revoke </button>
                </div>
              </div>

              <Divider
                sx={{
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              />
            </>
          ))}
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button className="save-btn"> See all </button>
      </div>
    </div>
  );
}

// TODO: Session Info More validate , Structured and Styled, ICON and LOGO
