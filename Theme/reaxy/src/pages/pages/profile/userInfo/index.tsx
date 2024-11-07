import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from '@mui/material'
import { styles } from './UserInfo.styles'
import { Form } from './form'
import React from 'react'

export default function UserInfo() {
  // ** styles
  const theme = useTheme()
  const style = styles(theme)

  return (
    <Card>
      <CardHeader
        sx={style.topBar}
        title={<Typography variant="h4">Edit your data</Typography>}
      />
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  )
}
