import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core';

function NavigationBarFull({value, handleChange, a11yProps, styles}) {
  return (
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigational tabs"
      >
        <Tab label="Home" className={styles.menuButton} aria-label="home" {...a11yProps(0)} />
        <Tab label="Projects" className={styles.menuButton} aria-label="coding projects" {...a11yProps(1)} />
        <Tab label="Blog" className={styles.menuButton} aria-label="blog" {...a11yProps(2)} />
        <Tab label="About" className={styles.menuButton} aria-label="about me" {...a11yProps(3)} />
        <Tab label="Contact" className={styles.menuButton} aria-label="contact me" {...a11yProps(4)} />
      </Tabs>
    </AppBar>
  )
}

export default NavigationBarFull
