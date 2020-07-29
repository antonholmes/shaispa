import {title} from './material-kit-react.jsx'

const cardStyle = {
  root: {
    maxWidth: 345,
    background: '#f0e5e5'
  },
  media: {
    height: 140
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    fontWeight: '300',
    marginTop: '30px',
    minHeight: '32px',
    color: '#000000',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    fontWeight: '300',
    maxWidth: '500px',
    margin: '10px 0 0'
  }
}

export default cardStyle
