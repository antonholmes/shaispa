import React from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
import GridContainer from './views/gridContainer.jsx'
import GridItem from './views/gridItem.jsx'
import pageStyle from './views/styling/pageStyle'
import Button from './views/button.jsx'
import image from '../assets/img/bg.jpg'

class About extends React.Component {
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
                <h1 className={classes.brand}>About Shai</h1>
                <h2>Reporter, Stand for Truth, GMA News and Public Affairs</h2>
                <h2>Freelance Writer, Producer, Editor, Stylist</h2>
              </div>
            </GridItem>
            <GridItem md={12} className={classes.textCenter}>
              <Link to="about" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  About Me
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pageStyle)(About)
