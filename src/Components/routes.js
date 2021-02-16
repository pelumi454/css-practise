import {Route, Switch} from 'react-router-dom'
import About from './About/About'
import Elearning from './Elearning/Elearning'


function Routes () {
    return(
        <Switch>
            <Route path = '/' exact component={About}/>
            <Route path = '/Elearning' exact component={Elearning}/>
        </Switch>

    )
}

export default Routes