import { Box, Icon, Theme, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation, useMatches } from "react-router-dom";
import { styles } from "./RouterBreadcrumbs.styles";
import { useTranslation } from "react-i18next";
import { ArrowForwardIosIcon } from "@config/assets";

export default function RouterBreadcrumbs() {
  // ** translate
  const { t } = useTranslation();

  // ** location
  const location = useLocation();
  const { pathname } = location;

  // ** unShow  dashboard component
  const unShow = pathname === "/dashboard";

  // ** matches
  let matches = useMatches();

  const crumbs = matches
    .filter((match) => Boolean((match as any)?.handle))
    .map((match) => ({
      crumb: (match as any)?.handle?.crumb((match as any)?.data),
      id: (match as any)?.handle?.id,
      icon: (match as any)?.handle?.icon,
      props: (match as any)?.props,
    }));

  // ** style
  const style = styles({ unShow });

  return (
    <Box
      sx={{
        ...style.container,
        "& .MuiBreadcrumbs-ol li:nth-of-type(odd)": {
          color: (theme: Theme) => theme.palette.primary.main,
        },
      }}
    >
      {crumbs.map((crumb, index) => (
        <Box
          key={index}
          sx={{
            ...style.wrapper,
            a: {
              color: (theme: Theme) =>
                pathname === crumb?.crumb?.props?.to
                  ? theme.palette.text.primary
                  : theme.palette.primary.main,
            },
            ".MuiIcon-root": {
              color: (theme: Theme) =>
                pathname === crumb?.crumb?.props?.to ||
                crumbs.length - 1 === index
                  ? theme.palette.text.primary
                  : theme.palette.primary.main,
            },
            svg: {
              color: (theme: Theme) =>
                pathname === crumb?.crumb?.props?.to ||
                crumbs.length - 1 === index
                  ? theme.palette.text.primary
                  : theme.palette.primary.main,
            },
          }}
        >
          <Icon sx={{ fontSize: "24px" }}>
            {crumb.icon && typeof crumb.icon === "string" && crumb.icon}
          </Icon>
          <Box
            component={crumbs.length - 1 === index ? Typography : Link}
            to={crumb?.crumb?.props?.to}
          >
            {t(crumb?.crumb?.props?.children, { ns: crumb?.id as string })}
          </Box>
          {crumbs.length - 1 !== index && (
            <ArrowForwardIosIcon
              sx={{ width: "1em", height: "1em", fontSize: "1em" }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
