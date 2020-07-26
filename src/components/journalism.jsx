import React from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
import GridContainer from './views/gridContainer.jsx'
import GridItem from './views/gridItem.jsx'
import pageStyle from './views/styling/pageStyle'
import Button from './views/button.jsx'
import image from '../assets/img/bg3.jpg'

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
                <h1>Watch my reports:</h1>
              </div>
            </GridItem>
            <GridItem md={12} className={classes.textCenter}>
              {/* <Link to={"https://www.youtube.com/watch?v=FAFUl8uzrVc&list=PLG5yvmTxvDF1b5C57aEIlu4lmQiKsIAOD"} className={classes.link}> */}
              <Button
                href="https://www.youtube.com/watch?v=FAFUl8uzrVc&list=PLG5yvmTxvDF1b5C57aEIlu4lmQiKsIAOD"
                color="primary"
                size="lg"
                simple
              >
                GMA News Playlist
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=7dAfaoMZg0A&list=PLG5yvmTxvDF0iU06V6iq1Bh_rGpSZi_pr"
                color="primary"
                size="lg"
                simple
              >
                COVID-19 Playlist
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=n5ec3fGvF8Q&list=PLG5yvmTxvDF294Ygoy69n8DoPhkIb6MRO"
                color="primary"
                size="lg"
                simple
              >
                Korea Playlist
              </Button>
              {/* </Link> */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(pageStyle)(Journalism)
