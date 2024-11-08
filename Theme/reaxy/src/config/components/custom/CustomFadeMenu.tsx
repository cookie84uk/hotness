// import * as React from 'react'
// import Button from '@mui/material/Button'
// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'
// import Fade from '@mui/material/Fade'
// import AccountCircle from '@mui/icons-material/AccountCircle'
// import { ArrowDown } from '../../assets/images/icons'

// export function CustomFadeMenu({ title, children }: MenuDropdownProps) {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
//   const open = Boolean(anchorEl)
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget)
//   }
//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   return (
//     <div>
//       <Button
//         id="fade-button"
//         aria-controls={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//         // startIcon={<AccountCircle />}
//         endIcon={<ArrowDown />}

//         // sx={styles.dropdown}
//         // aria-haspopup="true"
//         // aria-expanded={open ? 'true' : undefined}
//         // disableElevation
//         // onClick={handleClick}
//       >
//         {title}
//       </Button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           'aria-labelledby': 'fade-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//         {children}
//       </Menu>
//     </div>
//   )
// }
