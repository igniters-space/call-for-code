import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles({
  sideMenu: {
    position: 'absolute',
    left: '0px',
    top: '60px',
    width: '200px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#253053',
  },
})

const Landing = () => {
  const classes = style()

  return (
    <>
      <div className={classes.sideMenu}>
        <h1>Forms</h1>
      </div>
    </>
  )
}

export default Landing
