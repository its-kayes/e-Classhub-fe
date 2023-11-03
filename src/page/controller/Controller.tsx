import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Modal from "@mui/material/Modal";
import { Link, Outlet } from "react-router-dom";
import { IUserInfo } from "../../interface/index.global";
import { CreateClassInputStyle, CreateStyle } from "../../style";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type ICreateClassInfo = {
  className: string;
  shortTitle: string;
  mentorEmail?: string;
  mentorName?: string;
};

export default function Controller() {
  const theme = useTheme();
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<IUserInfo>({} as IUserInfo);
  const [open, setOpen] = React.useState(false);
  const [createClassInfo, setCreateClassInfo] =
    React.useState<ICreateClassInfo>({
      className: "",
      shortTitle: "",
    });

  const handleCreateModalOpen = () => setOpenCreateModal(true);
  const handleCreateModalClose = () => setOpenCreateModal(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  React.useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "{}"));
  }, []);

  const handleCreateClassroom = () => {
    console.log({
      ...createClassInfo,
      mentorEmail: userInfo.email,
      mentorName: userInfo.name,
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "#FFFFFF",
            width: "100%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 1,
              ...(open && { display: "none" }),
              color: "black",
            }}
          >
            <MenuIcon
              sx={{
                fontSize: "2rem",
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <AutoStoriesOutlinedIcon />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "inherit",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                >
                  <img src="/logo.png" alt="" />
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    color: "#1C64F2",
                    fontWeight: "bold",
                  }}
                >
                  E-ClassHub
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                {userInfo.type === "mentor" ? (
                  <Button
                    variant="outlined"
                    startIcon={<AddOutlinedIcon />}
                    sx={{
                      textTransform: "none",
                      mr: 5,
                      fontWeight: "bold",
                      borderRadius: 2,
                      color: "#1C64F2",
                    }}
                    onClick={handleCreateModalOpen}
                  >
                    Create Classroom
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    startIcon={<AddOutlinedIcon />}
                    sx={{
                      textTransform: "none",
                      mr: 5,
                      fontWeight: "bold",
                      borderRadius: 2,
                      color: "#1C64F2",
                    }}
                  >
                    Join Classroom
                  </Button>
                )}

                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    marginLeft: 1,
                  }}
                >
                  <img
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid #1C64F2",
                      borderRadius: "50%",
                    }}
                    src="/src/assets/kayes.jpg"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <Toolbar
            sx={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: "#1C64F2",
                  fontWeight: "bold",
                }}
              >
                E-ClassHub
              </Typography>
            </Box>
          </Toolbar>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/classes">
            <ListItem key={"Home"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <OtherHousesOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem key={"Enrolled"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SchoolOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Enrolled"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"Archived Classes"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <RecyclingOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Archived Classes"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <Link to="/classes/setting">
            <ListItem key={"Setting"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SettingsSuggestOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Setting"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>

      <Modal
        open={openCreateModal}
        onClose={handleCreateModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={CreateStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{
              mb: 2,
            }}
            component="h2"
          >
            Create Classroom
          </Typography>

          <input
            style={CreateClassInputStyle}
            type="text"
            placeholder="Class Name"
            onChange={(e) => {
              setCreateClassInfo({
                ...createClassInfo,
                shortTitle: e.target.value,
              });
            }}
          />
          <input
            style={CreateClassInputStyle}
            type="text"
            placeholder="Short Title"
            onChange={(e) => {
              setCreateClassInfo({
                ...createClassInfo,
                className: e.target.value,
              });
            }}
          />
          <input
            style={CreateClassInputStyle}
            type="text"
            placeholder="email"
            value={userInfo.email}
          />
          <input
            style={CreateClassInputStyle}
            type="text"
            placeholder="Mentor Name"
            value={userInfo.name}
          />
          <Button
            variant="outlined"
            sx={{
              width: "100%",
            }}
            onClick={handleCreateClassroom}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
