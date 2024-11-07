import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  Divider,
  CardActions,
  useTheme,
} from "@mui/material";
import Fon1 from "@config/assets/images/pages/cards/img6.jpg";
import { styles } from "./All.styles";
import { FavoriteIcon, MoreVertIcon, ShareIcon } from "@config/assets/icons";

export default function PrimaryCard() {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <>
      <Card sx={style.card}>
        <CardHeader
          sx={style.card.primary}
          title={"Primary Card"}
          action={
            <IconButton aria-label="settings" style={{ color: "white" }}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="300"
          image={Fon1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <IconButton aria-label="add to favorites" color="primary">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" color="primary">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
