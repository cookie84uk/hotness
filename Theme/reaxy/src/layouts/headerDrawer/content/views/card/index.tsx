import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

import React from "react";
import {
  GoogleIcon,
  PersonIcon,
  BadgeIcon,
  WorkIcon,
  EmailIcon,
  HomeIcon,
  PhoneIcon,
  LinkedInIcon,
  TwitterNewIcon,
  InstagramIcon,
} from "@config/assets/icons";
import { FacebookOutlined, Telegram } from "@mui/icons-material";
import { LogoIcon } from "@config/assets/icons";
import { styles } from "./ReaxyCard.styles";
import { useAppSelector } from "@config/hooks";
import { ISocialMediaLink } from "@config/models";
import { useNavigate } from "react-router-dom";

export default function ReaxyCard() {
  // ** redux
  const { name, surName, email, phone, address, job } = useAppSelector(
    (state) => state.slices.formHeaderSlice
  );

  const { open } = useAppSelector((state) => state.palette);

  // const navigate = window.open;

  const navigate = useNavigate();

  // ** style
  const style = styles({ open });

  const data = [
    { icon: <PersonIcon />, label: "Name", value: name },
    { icon: <BadgeIcon />, label: "Surname", value: surName },
    { icon: <WorkIcon />, label: "Job", value: job },
    { icon: <HomeIcon />, label: "Address", value: address },
    { icon: <EmailIcon />, label: "Email", value: email },
    { icon: <PhoneIcon />, label: "Phone", value: phone },
  ];

  const styleDataArray: ISocialMediaLink[] = [
    {
      name: "Facebook",
      style: style.faceBook,
      link: "#.facebook.com/",
      icon: <FacebookOutlined />,
    },
    {
      name: "Google",
      style: style.error,
      link: "#www.gmail.com/",
      icon: <GoogleIcon />,
    },
    {
      name: "Twitter",
      style: style.twitter,
      link: "#twitter.com/",
      icon: <TwitterNewIcon />,
    },
    {
      name: "Instagram",
      style: style.instagram,
      link: "#instagram.com/",
      icon: <InstagramIcon />,
    },
    {
      name: "Telegram",
      style: style.telegram,
      link: "#web.telegram.org/",
      icon: <Telegram />,
    },
    {
      name: "Linkedin",
      style: style.linkedin,
      link: "#www.linkedin.com/",
      icon: <LinkedInIcon />,
    },
    {
      name: "Phone",
      style: style.success,
      link: `tel:${phone}`,
      icon: <CallIcon />,
    },
  ];

  return (
    <Box sx={style.container}>
      <Box sx={style.formCard}>
        <Box className="contentForm">
          <Box className="logo">
            <LogoIcon />
            <Box>
              <Typography className="logoText" variant="h3">
                Reaxy Card
              </Typography>
            </Box>
          </Box>

          <Box className="form">
            {data.map((item, index) => (
              <Box key={index}>
                <IconButton>{item.icon}</IconButton>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {item.label} : {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={style.dividerBox}>
          <Divider />
        </Box>

        {/*  */}
        <Box sx={style.iconBox}>
          {styleDataArray.map(({ name, style, link, icon }, index) => (
            <Tooltip arrow title={name} key={index}>
              <IconButton sx={style} onClick={() => navigate(link)}>
                <Box component={"a"} href={link}>
                  {icon}
                </Box>
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
