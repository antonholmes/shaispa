import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import cardStyle from './styling/cardStyle'
import Button from './button.jsx'
import image from '../../assets/img/covid.jpg'

class CovidCard extends React.Component {
  render() {
    const {classes} = this.props

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title="COVID-19" />
          <CardContent>
            <h3 className={classes.title}>
              I've been covering COVID-19 since the first person under
              investigation landed in the Philippines. I do the daily updates on
              GMA News, along with maintaining our COVID-19 dashboard.
            </h3>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href="https://www.youtube.com/watch?v=7dAfaoMZg0A&list=PLG5yvmTxvDF0iU06V6iq1Bh_rGpSZi_pr"
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

export default withStyles(cardStyle)(CovidCard)
