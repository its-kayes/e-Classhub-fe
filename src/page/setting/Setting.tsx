import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./Style.scss";
import { UserImage } from "../../importer/importer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
              <div>
                <p className="name"> Emrul Kayes </p>
                <p className="sub-title"> Software Engineer </p>
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
