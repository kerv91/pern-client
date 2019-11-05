import React from 'react'
import {
    Route, 
    Link,
    Switch
} from 'react-router-dom'
import WorkoutCreate from './Home'

import Home from './Home';
import BarCreate from '../Bars/BarCreate';
import Downtown from '../Locations/Downtown';
import Fountainsquare from '../Locations/Fountainsquare';
import Broadripple from '../Locations/Broadripple';


const Sidebar = (props) => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
                <Link to="/"><img style={{
                    height: '54px',
                    width: '54px'
                }}src={'https://i.imgur.com/3tmv26f.png'} alt="Home" /></Link>
                <Link to="/downtown"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://i.imgur.com/SFTVewq.png'} alt="Downtown" /></Link>
                <Link to="/fountainsquare"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://www.run317.com/wp-content/uploads/sites/6/2015/03/RUN317_Icon_Races-04-300x300@2x.png'} alt="Fountain Square" /></Link>           
                <Link to="/broadripple"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://www.run317.com/wp-content/uploads/sites/6/2015/03/RUN317_Icon_Races-02-300x300@2x.png'} alt="Broad Ripple" /></Link>           
                <Link to="/barcreate"><img style={{
                    height: '50px',
                    width: '50px'
                }}src={'https://i.imgur.com/8UuGZO8.png'} alt="Add" /></Link>           
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/downtown"><Downtown /></Route>
                <Route exact path="/fountainsquare"><Fountainsquare /></Route>
                <Route exact path="/broadripple"><Broadripple /></Route>
                <Route exact path="/barcreate"><BarCreate token={props.token}/></Route>
            </Switch>
        </div>
    </div>
)


export default Sidebar;