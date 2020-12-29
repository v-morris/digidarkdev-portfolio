import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Home, Code, Description, Face, Email } from '@material-ui/icons'

function NavigationbarCollapsed({value, handleChange, a11yProps, styles}) {
  return (
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigational tabs"
      >
        <Tab icon={<Home />} className={styles.menuButton} aria-label="home" {...a11yProps(0)} />
        <Tab icon={<Code />} className={styles.menuButton} aria-label="coding projects" {...a11yProps(1)} />
        <Tab icon={<Description />} className={styles.menuButton} aria-label="blog" {...a11yProps(2)} />
        <Tab icon={<Face />} className={styles.menuButton} aria-label="about me" {...a11yProps(3)} />
        <Tab icon={<Email />} className={styles.menuButton} aria-label="contact me" {...a11yProps(4)} />
      </Tabs>
    </AppBar>
  )
}

export default NavigationbarCollapsed
