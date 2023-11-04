import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GeneralInfo from "../../elements/components/GeneralInfo";
import PasswordInfo from "../../elements/components/PasswordInfo";
import SessionsInfo from "../../elements/components/SessionsInfo";
import SocialInfo from "../../elements/components/SocialInfo";
import LanguageInfo from "../../elements/components/LanguageInfo";
import PrimaryInfo from "../../elements/components/PrimaryInfo";
import "./Style.scss";
import NotificationsInfo from "../../elements/components/NotificationsInfo";

export default function Setting() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", fontSize: "14px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              width: "100%",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            {/* Primary Info */}
            <PrimaryInfo />

            {/* Language & Time */}
            <LanguageInfo />

            {/* Social accounts */}
            <SocialInfo />

            {/* General Info */}
            <GeneralInfo />

            {/* Password */}
            <PasswordInfo />

            {/* Sessions */}
            <SessionsInfo />

            {/* Notifications Info */}
            <NotificationsInfo />
          </Box>
        </Grid>

        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}
