import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  menuButton: {
    paddingLeft: '10px',
    right: '0px',
  },
  title: {
    variant: 'h1',
    color: 'black',
    padding: '10px',
  },
  icons: {
    height: '25px',
    paddingLeft: '10px',
    right: '10px',
  },
  sideMenu: {
    position: 'absolute',
    left: '0px',
    top: '60px',
    width: '200px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#2222',
  },
  circle: {
    stroke: '#5cb85c',
    strokeWidth: '15',
    fill: '#5cb85c',
  },
})
const NavBar = () => {
  const classes = useStyles()

  const history = useHistory()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Design a logo in Svg format */}
          <svg width="60" height="60">
            <circle cx="25" cy="30" r="15" className={classes.circle} />
          </svg>
          <Typography onClick={() => history.push('/login')} edge="start" className={classes.title}>
            PURGO
          </Typography>
          <Grid item xs={3} spacing={3}>
            <Typography
              onClick={() => history.push('/signup')}
              edge="start"
              className={classes.icons}
            >
              SignUp
            </Typography>
          </Grid>

          <Grid item xs={3} spacing={3}>
            <Typography
              onClick={() => history.push('/signin')}
              edge="start"
              className={classes.icons}
            >
              SignIn
            </Typography>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
