import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import "./Style.scss";
import { UserImage } from "../../importer/importer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
