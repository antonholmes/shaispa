import Home from '../components/home.jsx'
import About from '../components/about.jsx'
import Journalism from '../components/journalism.jsx'

var indexRoutes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/journalism', name: 'Journalism', component: Journalism}
]

export default indexRoutes
