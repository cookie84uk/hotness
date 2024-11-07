import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Fon from '@config/assets/images/pages/cards//image5.jpg'
import { Box, useTheme } from '@mui/material'
import { styles } from './All.styles'
import { FavoriteIcon, ShareIcon } from '@config/assets/icons'

export function CardExample() {
  // ** useState
  const [expanded, setExpanded] = React.useState(false)

  // ** handle method
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  // ** styles
  const theme = useTheme()
  const style = styles(theme, { expanded })

  return (
    <Card sx={style.card}>
      <CardHeader
        avatar={
          <Avatar sx={style.avatar} aria-label="recipe">
            IS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h5"> Isabella Smone </Typography>}
        subheader={
          <Typography variant="subtitle1">September 14, 2011</Typography>
        }
      />
      <CardMedia component="img" height="500" image={Fon} alt="Paella dish" />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          React is a framework for creating reusable components. The word
          component has a wide meaning in the computer world.....
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={style.favorite} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={style.icon} aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box
          sx={style.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant='body1'>React:</Typography>

          <Typography paragraph variant='body1'>
            React (sometimes ReactJS or React.js) is an open source JavaScript
            library for building user interfaces. This is provided by Facebook
            and an association of individual developers and companies. The
            reaction can be used as a basis for the development of single-page
            or mobile applications. However, React only deals with the transfer
            of data to the DOM, and therefore the creation of React applications
            generally requires the use of additional libraries for public
            administration and routing.Redux and React Router are relevant
            examples of such libraries.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
