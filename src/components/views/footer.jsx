/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {List, ListItem, withStyles} from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import Button from '../views/button'
import footerStyle from './styling/footerStyle.jsx'
import Tooltip from '@material-ui/core/Tooltip'

function Footer({...props}) {
  const {classes, whiteFont} = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow me on Instagram"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{tooltip: classes.tooltip}}
              >
                <Button
                  href="https://instagram.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-instagram'} />
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-facebook"
                title="Follow me on Facebook"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{tooltip: classes.tooltip}}
              >
                <Button
                  href="https://facebook.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-facebook'} />
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-twitter"
                title="Follow me on Twitter"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{tooltip: classes.tooltip}}
              >
                <Button
                  href="https://twitter.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-twitter'} />
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-linkedin"
                title="Add me on LinkedIn"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{tooltip: classes.tooltip}}
              >
                <Button
                  href="https://linkedin.com/in/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-linkedin'} />
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} ,
          <Favorite className={classes.icon} /> by Shai Lagarde
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
}

export default withStyles(footerStyle)(Footer)
