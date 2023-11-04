import { Divider } from "@mui/material";
import Switch from "@mui/material/Switch";
import "../../page/setting/Style.scss";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function NotificationsInfo() {
  return (
    <div className="notifications-info-section">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "15px",
          marginTop: "50px",
        }}
      >
        Notification & Activity
      </p>
      <Divider
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          marginLeft: "15px",
        }}
      />
      <div className="account-box">
        <div className="per-account-box">
          <div className="header-box">
            <div className="title-box">
              <p className="title">Alerts & Notifications</p>
              <p className="no-link">
                You can set up Themesberg to get notifications
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
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
            <div className="title-box">
              <p className="title">Account Activity</p>
              <p className="no-link">
                Get important notifications about you or activity you've missed
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
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
            <div className="title-box">
              <p className="title">Meetups Near You</p>
              <p className="no-link">
                Get an email when a Dribbble Meetup is posted close to my
                location
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
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
            <div className="title-box">
              <p className="title">New Messages</p>
              <p className="no-link">
                Get Themsberg news, announcements, and product updates
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
          </div>
        </div>

        <br />

        <Divider
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />

        <div className="per-account-box">
          <div className="header-box">
            <div className="title-box">
              <p className="title">Alerts & Notifications</p>
              <p className="no-link">
                You can set up Themesberg to get notifications
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
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
            <div className="title-box">
              <p className="title">Alerts & Notifications</p>
              <p className="no-link">
                You can set up Themesberg to get notifications
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
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
            <div className="title-box">
              <p className="title">Alerts & Notifications</p>
              <p className="no-link">
                You can set up Themesberg to get notifications
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
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
            <div className="title-box">
              <p className="title">Alerts & Notifications</p>
              <p className="no-link">
                You can set up Themesberg to get notifications
              </p>
            </div>
          </div>

          <div>
            <Switch {...label} defaultChecked />
          </div>
        </div>

        <Divider
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
      </div>
    </div>
  );
}
