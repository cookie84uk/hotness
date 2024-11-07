// import {
//   Box,
//   MenuItem,
//   Divider,
//   Typography,
//   ListItemIcon,
//   useTheme,
// } from "@mui/material";
// import { styles } from "./Account.styles";
// import Admin from "@config/assets/images/admin/Admin.jpg";
// import { data } from "./data";
// import { useNavigate } from "react-router-dom";
// import type { IconType } from "react-icons";
// import { CustomMenu } from "@config/components";
// import { AccountCircleIcon } from "@config/assets";
// import React from "react";

// export function Account() {
//   // ** useNavigate
//   const navigate = useNavigate();

//   // ** style
//   const theme = useTheme();
//   const style = styles(theme);

//   // ** handle method
//   const handleLogOut = () => {
//     localStorage.removeItem("LOGGED_TOKEN");
//     navigate("/login");
//   };

//   return (
//     <>
//       <CustomMenu icon={AccountCircleIcon as IconType}>
//         <Box>
//           <Box sx={style.header}>
//             <Box component="img" src={Admin} alt={"user"} sx={style.boxImage} />
//             <Box sx={style.boxText}>
//               <Typography sx={style.typography} variant="h5">
//                 Zeko Izmaylov
//               </Typography>
//               <Typography sx={style.typography} variant="subtitle1">
//                 Web developer
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             ".MuiButtonBase-root": {
//               padding: "8px 16px",
//             },
//             "& .MuiSvgIcon-root": {
//               width: "24px",
//               height: "24px",
//             },
//           }}
//         >
//           {data.map((d, index) => (
//             <div key={index}>
//               {index === 5 && <Divider sx={style.divider} />}
//               <MenuItem
//                 onClick={() =>
//                   index === 5 ? handleLogOut() : navigate(d.path)
//                 }
//               >
//                 <Box sx={style.listItem}>
//                   <ListItemIcon>{<d.icon />}</ListItemIcon>
//                   <Typography variant="h6">{d.title}</Typography>
//                 </Box>
//               </MenuItem>
//             </div>
//           ))}
//         </Box>
//       </CustomMenu>
//     </>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { AccountCircleIcon } from "@config/assets";
import { IconType } from "react-icons";
import { data } from "./data";
import { useTheme } from "@mui/material";
import { styles } from "./Account.styles";
import Admin from "@config/assets/images/admin/Admin.jpg";
import { MenuCustom } from "@config/components";

export function Account() {
  // ** useNavigate
  const navigate = useNavigate();

  // ** style
  const theme = useTheme();
  const style = styles(theme);

  // ** handle method
  const handleLogOut = () => {
    localStorage.removeItem("LOGGED_TOKEN");
    navigate("/login");
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <MenuCustom
          icon={AccountCircleIcon as IconType}
          header={
            <Box sx={style.header}>
              <Box
                component="img"
                src={Admin}
                alt={"user"}
                sx={style.boxImage}
              />
              <Box sx={style.boxText}>
                <Typography sx={style.typography} variant="h5">
                  Zeko Izmaylov
                </Typography>
                <Typography sx={style.typography} variant="subtitle1">
                  Web developer
                </Typography>
              </Box>
            </Box>
          }
          children={data.map((d, index) => (
            <Box
              sx={{
                "& .MuiButtonBase-root": {
                  width: "100%",
                  border: "none",
                },
              }}
              key={index}
            >
              {index === 5 && <Divider sx={style.divider} />}
              <MenuItem
                onClick={() =>
                  index === 5 ? handleLogOut() : navigate(d.path)
                }
              >
                <Box sx={style.listItem}>
                  <ListItemIcon>{<d.icon />}</ListItemIcon>
                  <Typography variant="h6">{d.title}</Typography>
                </Box>
              </MenuItem>
            </Box>
          ))}
        />
      </Box>
    </React.Fragment>
  );
}
