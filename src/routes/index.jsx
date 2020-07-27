import Home from '../components/home.jsx'
import About from '../components/about.jsx'
import Journalism from '../components/journalism.jsx'
import Lifestyle from '../components/lifestyle.jsx'

var indexRoutes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/journalism', name: 'Journalism', component: Journalism},
  {path: '/lifestyle', name: 'Lifestyle', component: Lifestyle}
]

export default indexRoutes
