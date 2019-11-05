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
                <Link to="/"><img style={{
                    height: '54px',
                    width: '54px'
                }}src={'https://i.imgur.com/3tmv26f.png'} alt="Home" /></Link>
                <Link to="/jsxrules"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://i.imgur.com/SFTVewq.png'} alt="Downtown" /></Link>
                <Link to="/state"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://www.run317.com/wp-content/uploads/sites/6/2015/03/RUN317_Icon_Races-04-300x300@2x.png'} alt="Broad Ripple" /></Link>           
                <Link to="/effects"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://www.run317.com/wp-content/uploads/sites/6/2015/03/RUN317_Icon_Races-02-300x300@2x.png'} alt="Fountain Square" /></Link>           
                <Link to="/state"></Link>
                <Link to="/effects"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://i.imgur.com/8UuGZO8.png'} alt="Add" /></Link>           
                <Link to="/resources"></Link>
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