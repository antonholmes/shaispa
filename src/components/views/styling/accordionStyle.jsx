import {container, title} from './material-kit-react'

const accordionStyle = {
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    fontWeight: '300',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  root: {
    width: '100%'
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 100
  },
  subtitle: {
    fontSize: '1.313rem',
    fontWeight: '300',
    maxWidth: '500px',
    margin: '10px 0 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  brand: {
    color: '#FFFFFF',
    fontSize: '2.8rem',
    fontWeight: '300',
    textAlign: 'left'
  },
  navbar: {
    marginBottom: '-20px',
    zIndex: '100',
    position: 'relative',
    overflow: 'hidden',
    '& header': {
      borderRadius: '0'
    }
  },
  navigation: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    marginTop: '0',
    minHeight: '740px'
  },
  formControl: {
    margin: '0 !important',
    paddingTop: '0'
  },
  inputRootCustomClasses: {
    margin: '0 !important'
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    color: 'inherit'
  },
  link: {
    textDecoration: 'none'
  },
  textCenter: {
    textAlign: 'center'
  }
}

export default accordionStyle
