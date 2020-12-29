import React from 'react';
import { Link , Container, Typography, makeStyles } from '@material-ui/core';
import { GitHub, Twitter } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.digidarkdev.com/">
        DigiDark Development
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.grey[200],
    textAlign: 'center'
  },
  icons: {
    padding: theme.spacing(4, 1, 0, 2)
  }
}));

function SocialMedia() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary">
      <Link
      color="inherit"
      href="https://github.com/v-morris"
      target="_blank"
      rel="noopener"
      >
        <GitHub className={classes.icons} aria-hidden='true'/>
        GitHub
      </Link>
        <Link
        color="inherit"
        href="https://twitter.com/DigiDarkDev"
        target="_blank"
        rel="noopener"
        >
          <Twitter className={classes.icons} aria-hidden='true' />
          Twitter
        </Link>
    </Typography>
  )
}

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
          <SocialMedia />
        </Container>
      </footer>
  );
}