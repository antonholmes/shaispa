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
        <Link to="/journalism" className={classes.dropdownLink}>
          Journalism
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/lifestyle" className={classes.dropdownLink}>
          Lifestyle
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/mentalhealth" className={classes.dropdownLink}>
          Mental Health
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" className={classes.dropdownLink}>
          Contact
        </Link>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
