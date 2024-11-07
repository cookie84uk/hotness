import React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { MuiCard } from '@config/components'
import { DeleteIcon, DoneIcon } from '@config/assets/icons'
import { styles } from './All.styles'
import { useTheme } from '@mui/material'

export function CustomIcon() {
  // ** handle methods
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  // ** style
  const theme = useTheme()
  const style = styles(theme)
  return (
    <MuiCard title="Icon chip">
      <Stack direction="row"  sx={style.container}>
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </Stack>
    </MuiCard>
  )
}
