import { Typography } from '@material-ui/core'
import React from 'react'

function TabHeader({ pageTitle }) {
  return (
    <Typography variant="h2" component="h1">
      {pageTitle}
    </Typography>
  )
}

export default TabHeader
