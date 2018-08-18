/*eslint-disable*/
import React from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import headerLinksStyle from './styling/headerLinksStyle.jsx'

function HeaderLinks({...props}) {
  const {classes} = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.dropdownLink}>
          About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/people" className={classes.dropdownLink}>
          People
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/places" className={classes.dropdownLink}>
          Places
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/fashion" className={classes.dropdownLink}>
          Fashion
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/beauty" className={classes.dropdownLink}>
          Beauty
        </Link>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
