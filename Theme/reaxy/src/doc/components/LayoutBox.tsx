import { useLayoutSize } from "@config/hooks";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface ILayoutBoxProps {
  children: ReactNode;
  id?: string;
  name?: string;
  icon?: ReactNode;
  background?: "paper" | "default";
  sx?: SxProps<Theme>;
}

const LayoutBox: React.FC<ILayoutBoxProps> = ({
  children,
  id,
  icon,
  sx,
  name,
  background = "paper", // Varsayılan değeri "paper" olarak ayarla
}: ILayoutBoxProps) => {
  // ** translate
  const { t } = useTranslation();

  // ** useLayout height
  const { LAYOUT_SIZE } = useLayoutSize();

  return (
    <Box
      component={"section"}
      id={id}
      sx={{
        width: "100%",
        minHeight: LAYOUT_SIZE,
        boxShadow: 3,
        background: (theme: Theme) =>
          background === "paper"
            ? theme.palette.background.paper
            : background === "default"
            ? theme.palette.background.default
            : theme.palette.background.paper,
        p: 3,
        borderRadius: "16px",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          p: 4,
          gap: "16px",
          svg: {
            color: (theme: Theme) => theme.palette.primary.main,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {icon && icon}
          {id && <Typography variant="h4">{t("title", { ns: id })}</Typography>}
        </Box>
        {name && (
          <Typography
            variant="h5"
            sx={{ color: (theme: Theme) => theme.palette.primary.main }}
          >
            {name}
          </Typography>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default LayoutBox;
