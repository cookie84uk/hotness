import { Box, TextField } from '@mui/material'
import { HomeIcon, MailIcon, PhoneIcon } from '@config/assets/icons'
import { IChange } from '@config/models'
import { useAppSelector } from '@config/hooks'
import React from 'react'
import { CustomLabel } from '@config/components'

export function Contacts({ handleChange }: IChange) {
  // ** Redux
  const { values } = useAppSelector((state) => state.users)

  return (
    <Box>
      <TextField
        autoFocus
        margin="dense"
        name="email"
        value={values.email}
        onChange={handleChange}
        id="email"
        label={<CustomLabel icon={<MailIcon />} name={'Email'} />}
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        id="phone"
        label={<CustomLabel icon={<PhoneIcon />} name={'Phone'} />}
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        name="address"
        value={values.address}
        onChange={handleChange}
        id="address"
        label={<CustomLabel icon={<HomeIcon />} name={'Address'} />}
        fullWidth
        variant="filled"
      />
    </Box>
  )
}
