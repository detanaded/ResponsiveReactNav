
import {Switch, Route} from 'react-router-dom'
import Home from './/components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'



export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)