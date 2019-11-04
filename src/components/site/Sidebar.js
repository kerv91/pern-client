import React from 'react'
import {
    Route, 
    Link,
    Switch
} from 'react-router-dom'
import WorkoutCreate from './Home'


import Home from './Home';
import Resources from './Resources';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';


const Sidebar = (props) => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
            <Link to="/"><img src={'https://img.icons8.com/cotton/64/000000/home--v2.png'} alt="Home" /></Link>
                <li><Link to="/jsxrules">DT</Link></li>           
                <li><Link to="/state">FS</Link></li>
                <li><Link to="/effects">BR</Link></li>
                <li><Link to="/resources">Tell Us</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
            <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/state"><State /></Route>
                <Route exact path="/effects"><Effects /></Route>
            </Switch>
        </div>
    </div>
)


export default Sidebar;