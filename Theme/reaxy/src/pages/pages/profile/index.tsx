import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Admin } from './admin'

export default function Profile() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Admin />
      </Grid>
      <Grid item xs={12} md={6} lg={9}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
