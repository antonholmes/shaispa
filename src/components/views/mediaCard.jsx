import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import cardStyle from '../views/styling/cardStyle'
import Button from '../views/button.jsx'
import image from '../../assets/img/sft.jpg'

class MediaCard extends React.Component {
  render() {
    const {classes} = this.props

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title="Media" />
          <CardContent>
            <h3 className={classes.title}>
              Reporter, Stand for Truth, GMA News and Public Affairs
            </h3>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href="https://facebook.com/standfortruthGMA"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(cardStyle)(MediaCard)
