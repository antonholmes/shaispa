/*eslint-disable*/
import React from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {CloudDownload} from '@material-ui/icons'
import Button from '../views/button'
import headerLinksStyle from './styling/headerLinksStyle.jsx'
import Tooltip from '@material-ui/core/Tooltip'

function HeaderLinks({...props}) {
  const {classes} = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.dropdownLink}>
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/antonholmes/shaispa"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on Facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            href="https://facebook.com/lovechicph"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
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
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
