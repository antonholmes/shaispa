import {container, primaryColor} from './anton-react'

import tooltip from './tooltipsStyle.jsx'

const footerStyle = theme => ({
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important'
  },
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5'
      }
    }
  },
  listItemText: {
    padding: '0 !important'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  },
  ...tooltip,
  marginRight5: {
    marginRight: '3px'
  }
})

export default footerStyle
