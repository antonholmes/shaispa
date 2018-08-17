import React from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import componentsStyle from './styling/home.jsx'
import Header from './styling/header.jsx'
import Footer from './styling/footer.jsx'
import GridContainer from './styling/gridContainer.jsx'
import GridItem from './styling/gridItem.jsx'
import Button from './styling/button.jsx'
import Parallax from './styling/parallax.jsx'
import HeaderLinks from './styling/headerLinks.jsx'

class Home extends React.Component {
  render() {
    const {classes, ...rest} = this.props
    return (
      <div>
        <Header
          brand="Shai Lagarde"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax image={require('../assets/img/bg3.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Shai Lagarde</h1>
                  <h3 className={classes.subtitle}>
                    Lifestyle Journalist, Writer, Producer, Youth Counselor
                  </h3>
                </div>
              </GridItem>
              <GridItem md={12} className={classes.textCenter}>
                <Link to="about" className={classes.link}>
                  <Button color="primary" size="lg" simple>
                    Read More
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Home)
