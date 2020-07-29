import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

const style = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto'
  }
}

function GridItem({...props}) {
  const {classes, children, className, ...rest} = props
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

export default withStyles(style)(GridItem)

GridItem.defaultProps = {
  className: ''
}

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
