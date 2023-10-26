import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Style.scss";
import { UserImage } from "../../importer/importer";
import { Divider } from "@mui/material";
import GeneralInfo from "../../elements/components/GeneralInfo";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Setting() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <div className="primary-user-info-box">
              <img src={UserImage} alt="" />
              <div className="header-box">
                <div className="title-box">
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    Emrul Kayes
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "#aaa",
                      paddingTop: "5px",
                    }}
                  >
                    Software Engineer
                  </p>
                </div>

                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    textTransform: "none",
                    width: "150px",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  Change picture
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
            </div>
          </Box>

          <Box
            sx={{
              width: "100%",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            {/* Language & Time */}
            <div className="language-time-section">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Language & Time{" "}
              </p>

              <div className="language-section">
                <div>
                  <p className="language-title"> Select language </p>
                  <input type="text" placeholder="English (UK)" />
                </div>

                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <p className="language-title"> Time zone </p>
                  <input type="text" placeholder="GMT+01:00" />
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <button className="save-btn"> Save all </button>
              </div>
            </div>

            {/* Social accounts */}
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

            {/* General Info */}
            <GeneralInfo />
          </Box>
        </Grid>

        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}
