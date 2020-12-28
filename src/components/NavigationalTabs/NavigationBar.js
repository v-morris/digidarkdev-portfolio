import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBarFull from './NavigationBarFull'
import NavigationBarCollapsed from './NavigationBarCollapsed'

function a11yProps(index) {
  return {
    id: `navigational-tab-${index}`,
    'aria-controls': `navigational-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(() => ({
  menuButton: {
    flexGrow: 1,
    minWidth: '10px',
    maxWidth: '160px',
  },
}));

function NavigationBar({ isMobileView, value, handleChange }) {
  const styles = useStyles();
    switch (isMobileView) {
      case true:
        return (
        <NavigationBarFull
            value={value}
            handleChange={handleChange}
            a11yProps={a11yProps}
            styles={styles}
          />
        )
      case false:
        return (
          <NavigationBarCollapsed
            value={value}
            handleChange={handleChange}
            a11yProps={a11yProps}
            styles={styles}
          />
        )
      default:
        return null
    }
}

export default NavigationBar;