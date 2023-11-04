import { Divider } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../page/setting/Style.scss";

export default function SocialInfo() {
  return (
    <div className="social-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Social accounts
      </p>

      <div className="account-box">
        <div className="per-account-box">
          <div className="header-box">
            <div className="icon">
              <FacebookRoundedIcon />
            </div>
            <div className="title-box">
              <p>Facebook account</p>
              <p className="link">www.facebook.com/themesberg</p>
            </div>
          </div>

          <div className="btn">
            <button> Disconnected </button>
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
              <TwitterIcon />
            </div>
            <div className="title-box">
              <p>Twitter account</p>
              <p className="link">www.twitter.com/themesberg</p>
            </div>
          </div>

          <div className="btn">
            <button> Disconnected </button>
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
              <GitHubIcon />
            </div>
            <div className="title-box">
              <p>Github account</p>
              <p className="no-link">Not connected</p>
            </div>
          </div>

          <div className="not-connected-box">
            <button> Connect </button>
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
              <LinkedInIcon />
            </div>
            <div className="title-box">
              <p>Linkedin account</p>
              <p className="no-link">Not connected</p>
            </div>
          </div>
          <div className="not-connected-box">
            <button> Connect </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <button className="save-btn"> Save all </button>
      </div>
    </div>
  );
}
