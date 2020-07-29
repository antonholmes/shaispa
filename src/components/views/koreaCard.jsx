import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import cardStyle from './styling/cardStyle'
import Button from './button.jsx'
import image from '../../assets/img/korea.jpg'

class KoreaCard extends React.Component {
  render() {
    const {classes} = this.props

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title="Korea" />
          <CardContent>
            <h3 className={classes.title}>
              Watch my reports covering Korea-ASEAN relations, tourism, and its
              COVID-19 response
            </h3>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href="https://www.youtube.com/watch?v=n5ec3fGvF8Q&list=PLG5yvmTxvDF294Ygoy69n8DoPhkIb6MRO"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-youtube'} />
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(cardStyle)(KoreaCard)
