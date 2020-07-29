import React from 'react'
// import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import GridContainer from './views/gridContainer.jsx'
import GridItem from './views/gridItem.jsx'
import CovidCard from './views/covidCard.jsx'
import GMANewsCard from './views/gmanewsCard.jsx'
import KoreaCard from './views/koreaCard.jsx'
import pageStyle from './views/styling/pageStyle'
// import Button from './views/button.jsx'
import image from '../assets/img/shai2.jpg'

class MentalHealth extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{backgroundImage: 'url(' + image + ')'}}
        >
          <GridContainer>
            <GridItem>
              <div className={classes.container}>
                <h1 className={classes.brand}>Mental Health</h1>
              </div>
            </GridItem>
            <GridItem>
              <div className={classes.container}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FAFUl8uzrVc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pageStyle)(MentalHealth)
