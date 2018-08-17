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
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
