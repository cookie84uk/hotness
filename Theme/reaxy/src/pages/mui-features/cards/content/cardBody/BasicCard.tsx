import {
  Card,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  Divider,
  CardActions,
  useTheme,
} from '@mui/material'
import Fon3 from '@config/assets/images/pages/cards/image3.jpg'
import React from 'react'
import { styles } from './All.styles'
import { FavoriteIcon, ShareIcon } from '@config/assets/icons'

export function BasicCard() {
  // ** useState
  const [expanded] = React.useState(false)

  // ** styles
  const theme = useTheme()
  const style = styles(theme, { expanded })

  return (
    <Card sx={style.card}>
      <CardMedia component="img" height="500" image={Fon3} />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <IconButton sx={style.favorite} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={style.icon} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
