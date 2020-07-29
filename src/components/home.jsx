import React from 'react'
// import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import componentsStyle from './views/styling/componentsStyle.jsx'
import Header from './views/header.jsx'
import Footer from './views/footer.jsx'
import GridContainer from './views/gridContainer.jsx'
import GridItem from './views/gridItem.jsx'
import Button from './views/button.jsx'
import Parallax from './views/parallax.jsx'
import HeaderLinks from './views/headerLinks.jsx'
import About from './about'
import Journalism from './journalism'
import Lifestyle from './lifestyle'

class Home extends React.Component {
  render() {
    const {classes, ...rest} = this.props
    return (
      <div>
        <Header
          brand="SHAI LAGARDE"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax image={require('../assets/img/shai1.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Shai Lagarde</h1>
                  <h3 className={classes.subtitle}>
                    Journalist, Writer, Producer, Youth Counselor
                  </h3>
                </div>
              </GridItem>
              <GridItem md={12} className={classes.textCenter}>
                {/* <Link to="about" className={classes.link}> */}
                <Button href="/about" color="primary" size="lg" simple>
                  About Me
                </Button>
                {/* </Link> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div>
          <About />
          <Journalism />
          <Lifestyle />
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Home)
