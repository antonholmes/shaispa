import {container, title} from './anton-react.jsx'
import {pink, blue} from '@material-ui/core/colors'

const gridListStyle = {
  container: {
    height: '50%',
    zIndex: '12',
    color: '#FFFFFF'
    // ...container
  },
  title: {
    color: '#FFFFFF',
    ...title
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: blue
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

export default gridListStyle
