import React from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
import GridContainer from './views/gridContainer.jsx'
import GridItem from './views/gridItem.jsx'
import pageStyle from './views/styling/pageStyle'
import Button from './views/button.jsx'
import image from '../assets/img/wedding.jpg'
// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

class Lifestyle extends React.Component {
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
                <h1 className={classes.brand}>Wedding</h1>
              </div>
            </GridItem>
            <GridItem md={12} className={classes.textCenter}>
              {/* <Link to={"https://www.youtube.com/watch?v=FAFUl8uzrVc&list=PLG5yvmTxvDF1b5C57aEIlu4lmQiKsIAOD"} className={classes.link}> */}
              {/* <AutoRotatingCarousel /> */}
              {/* </Link> */}
            </GridItem>
            {/* <Album /> */}
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pageStyle)(Lifestyle)
