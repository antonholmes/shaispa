import React from 'react'
import Carousel from 'react-slick'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from './gridContainer.jsx'
import GridItem from './gridItem.jsx'
import PhotoCard from './card.jsx'
import LocationOn from '@material-ui/icons/LocationOn'
import carouselStyle from './styling/carouselStyle.jsx'
import image1 from '../../assets/img/wedding.jpg'
import image2 from '../../assets/img/wedding2.jpg'
import image3 from '../../assets/img/wedding3.jpg'

class SectionCarousel extends React.Component {
  render() {
    const {classes} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    }
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <PhotoCard carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </PhotoCard>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(carouselStyle)(SectionCarousel)
