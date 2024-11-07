import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { Box } from '@mui/material'
import { MuiCard } from '@config/components'
import { CloseIcon } from '@config/assets/icons'
import { styles } from './All.style'

// ** transition
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export function FullScreen() {
  // ** useState
  const [open, setOpen] = React.useState(false)

  // ** handle method
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // ** styless

  

  return (
    <MuiCard title="Full-screen dialog">
      <Box>
        <Button fullWidth variant="outlined" onClick={handleClickOpen}>
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          sx={styles.fsDialog}
        >
          <Box sx={{ height: '100%' }}>
            <AppBar sx={styles.fsAppbar}>
              <Toolbar sx={styles.fsToolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItem>
            </List>
          </Box>
        </Dialog>
      </Box>
    </MuiCard>
  )
}
