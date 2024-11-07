import React from 'react'
import { Stack, Chip, useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import User from '@config/assets/images/pages/chips/User.png'
import { MuiCard } from '@config/components'
import { styles } from './All.styles'

export function AvatarChip() {
  // ** styles
  const theme = useTheme()
  const style = styles(theme)
  return (
    <MuiCard title="Avatar chip">
      <Stack direction="row" spacing={2} sx={style.container}>
        <Chip size="medium" avatar={<Avatar>M</Avatar>} label="Avatar" />
        <Chip
          avatar={<Avatar alt="Natacha" src={User} />}
          label="Avatar"
          variant="outlined"
        />
      </Stack>
    </MuiCard>
  )
}
