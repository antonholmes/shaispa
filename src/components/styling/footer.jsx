/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {List, ListItem, withStyles} from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import footerStyle from './footerStyle.jsx'

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
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.lovechic.ph"
                className={classes.block}
                target="_blank"
              >
                Love Chic
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/shailagarde/"
                className={classes.block}
                target="_blank"
              >
                LinkedIn
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://shaitest.herokuapp.com"
                className={classes.block}
                target="_blank"
              >
                Heroku
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} ,
          <Favorite className={classes.icon} /> by{' '}
          <a href="https://lovechic.ph" className={aClasses} target="_blank">
            Shai Lagarde
          </a>
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
