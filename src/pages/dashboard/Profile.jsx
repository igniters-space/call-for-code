import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Container } from 'react-layout-components'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  depositContext: {
    flex: 1,
  },
})

export default function Deposits() {
  const classes = useStyles()
  return (
    <Container>
      <Typography component="p" variant="h4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
      </Typography>
    </Container>
  )
}
