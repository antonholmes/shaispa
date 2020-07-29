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

class Journalism extends React.Component {
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
                <h1 className={classes.brand}>Reporter</h1>
              </div>
            </GridItem>
            <GridItem>
              <div className={classes.container}>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  align-items="center"
                >
                  <GMANewsCard />
                  <CovidCard />
                  <KoreaCard />
                </Grid>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pageStyle)(Journalism)
