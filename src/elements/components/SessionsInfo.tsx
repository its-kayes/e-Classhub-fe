import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import { Divider } from "@mui/material";
import "../../page/setting/Style.scss";

export default function SessionsInfo() {
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
        <div className="per-account-box">
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
        />

        <div className="per-account-box">
          <div className="header-box">
            <div className="icon">
              <DesktopWindowsRoundedIcon />
            </div>
            <div className="title-box">
              <p>California 123.123.123.123</p>
              <p className="no-link">Chrome on macOS</p>
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
