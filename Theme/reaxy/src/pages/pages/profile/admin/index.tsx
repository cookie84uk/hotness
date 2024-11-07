import AdminImg from "@config/assets/images/admin/Admin.jpg";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Fab,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  FacebookOutlinedIcon,
  GoogleIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@config/assets/icons";
import { styles } from "./Admin.styles";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

export function Admin() {
  // **location
  const location = useLocation();

  const pathname = location.pathname;

  // ** navigate
  const navigate = useNavigate();

  const handleGet = () => {
    if (pathname === "/profile/project") {
      navigate("/profile/user-info");
    } else {
      navigate("/profile/project");
    }
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Card>
      <CardMedia component={"img"} sx={style.img} image={AdminImg} />
      <CardContent>
        <Box sx={style.cardContent}>
          <Typography gutterBottom sx={style.textName} variant="h4">
            Zeko İsmayilov
          </Typography>
          <Typography gutterBottom sx={style.textPosition} variant="h5">
            Web Developer
          </Typography>
        </Box>
        <Typography gutterBottom sx={style.textAbout} variant="h6">
          About:
        </Typography>
        <Typography sx={style.textAboutContent} fontWeight={400} variant="h6">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Typography>
      </CardContent>
      <CardContent sx={style.cardAction}>
        <Button variant="contained" onClick={() => handleGet()} sx={style.btn}>
          More
        </Button>
      </CardContent>
      <Divider />
      <CardContent sx={style.center}>
        <Box sx={style.centerContent}>
          <Typography variant="h6">Followers:</Typography>
          <Typography sx={style.textPrimary} variant="h5">
            675
          </Typography>
        </Box>
        <Box sx={style.centerContent}>
          <Typography variant="h6">Following:</Typography>
          <Typography sx={style.textPrimary} variant="h5">
            428
          </Typography>
        </Box>
        <Box sx={style.centerContent}>
          <Typography variant="h6">Project</Typography>
          <Typography sx={style.textPrimary} variant="h5">
            27
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardContent sx={style.fabContainer}>
        <Tooltip title={"Facebook"}>
          <Fab
            target="blank"
            href="https://www.facebook.com/"
            size="small"
            className="facebook"
            aria-label="add"
          >
            <FacebookOutlinedIcon />
          </Fab>
        </Tooltip>
        <Tooltip title={"Twitter"}>
          <Fab
            target="blank"
            href="https://twitter.com/"
            size="small"
            className="twitter"
            aria-label="add"
          >
            <TwitterIcon />
          </Fab>
        </Tooltip>

        <Tooltip title={"Linkedin"}>
          <Fab
            target="blank"
            href="https://www.linkedin.com/"
            size="small"
            className="linkedin"
            aria-label="add"
          >
            <LinkedInIcon />
          </Fab>
        </Tooltip>

        <Tooltip title={"Google"}>
          <Fab
            target="blank"
            href="https://mail.google.com/mail/u/0/#inbox"
            size="small"
            className="google"
            aria-label="add"
          >
            <GoogleIcon />
          </Fab>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
