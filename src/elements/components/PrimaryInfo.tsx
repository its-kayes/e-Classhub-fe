import { Button } from "@mui/material";
import "../../page/setting/Style.scss";
import { UserImage } from "../../importer/importer";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

export default function PrimaryInfo() {
  return (
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
  );
}
