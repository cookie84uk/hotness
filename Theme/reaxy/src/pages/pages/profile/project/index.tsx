import * as React from "react";
import { Box, Divider, Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FavoriteIcon, ImageIcon, ShareIcon } from "@config/assets/icons";
import { styles } from "./Project.styles";
import { adminData } from "@config/data";
import { IAdminCard } from "@config/models";

export default function ProjectCards() {
  return (
    <Grid container spacing={3}>
      {adminData.map((item: IAdminCard, index: number) => (
        <Grid key={index} item xs={12} md={12} lg={6}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia component="img" sx={styles.img} image={item.img} />
            <CardContent>
              <Typography
                sx={{ textAlign: "center" }}
                gutterBottom
                variant="h4"
                component="div"
              >
                {item.name}
              </Typography>
              <Typography variant="h6" fontWeight={400} >
                {item.text}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={styles.cardContent}>
              <Box sx={styles.action}>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="h5">{item.likes}</Typography>
              </Box>
              <Box>
                <Button startIcon={<ImageIcon />}>Live preview</Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
