import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import photocardStyle from './styling/photocardStyle'

function PhotoCard({...props}) {
  const {classes, className, children, plain, carousel, ...rest} = props
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool
}

export default withStyles(photocardStyle)(PhotoCard)
