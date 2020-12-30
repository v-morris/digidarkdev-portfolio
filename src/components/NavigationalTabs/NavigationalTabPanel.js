import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
  Box,
} from '@material-ui/core'
import NavigationBar from './NavigationBar'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`navigational-tabpanel-${index}`}
      aria-labelledby={`navigational-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function NavigationalTabPanel() {
  const classes = useStyles()
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.up('sm'))
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <NavigationBar
        isMobileView={isMobileView}
        value={value}
        handleChange={handleChange}
      />
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        Projects
      </TabPanel>
      <TabPanel value={value} index={2}>
        Blog
      </TabPanel>
      <TabPanel value={value} index={3}>
        About
      </TabPanel>
      <TabPanel value={value} index={4}>
        Contact
      </TabPanel>
    </div>
  )
}
