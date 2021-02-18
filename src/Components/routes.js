import {Route, Switch} from 'react-router-dom'
import About from './About/About'
import Elearning from './Elearning/Elearning'
import Faq from './FAQ/Faq'


function Routes () {
    return(
        <Switch>
            <Route path = '/' exact component={About}/>
            <Route path = '/Elearning' exact component={Elearning}/>
            <Route path = '/Faq' exact component={Faq}/>
        </Switch>

    )
}

export default Routes