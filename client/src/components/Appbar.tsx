import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import axios from "axios";
import { useRecoilValue } from "recoil";
import userEmailState from "../store/selectors/userEmail";
import { BASE_URL } from "../../config";

const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("acessToken");

      await axios.post(
        // "https://learnit-api.onrender.com/user/logout"

        `${BASE_URL}/user/logout`
      );
      window.location.reload();
      navigate("/");
    } catch (error: unknown) {
      if (typeof error === "string") {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Link to="/">
          <img
            src="../../logo.png"
            alt=""
            className="w-10 h-10 rounded-[20%] m-1 mr-4 "
          />
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">LearnIt</Link>
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <Link to="profile">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </Link>
        <Link to="/courses/mycourses">
          <ListItemButton>
            <ListItemIcon>
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText primary="MyCourses" />
          </ListItemButton>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="courses">
          <ListItemButton>
            <ListItemIcon>
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText primary={"Courses"} />
          </ListItemButton>
        </Link>
        <Link to="/">
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} onClick={handleLogout} />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="flex justify-end">
          {!userEmail ? (
            <>
              <Link to="/signin">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup">
                <Button color="inherit">Start for free</Button>
              </Link>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
