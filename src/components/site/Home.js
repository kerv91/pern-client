import React from "react";
import { Link } from "react-router-dom";
import {Jumbotron, Button} from 'reactstrap';

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
            <Jumbotron>
                <h1 className="display-3">DogGo is here to help decide where to go grab a drink with your beloved canine BFF</h1>
            <p className="lead">
            <hr />
            </p>
            <h1>Select the area you'd like to visit</h1>
            <p>
            Bars that allow dogs will populate. Check em out without the guilt for leaving your tried and true at home MISSING you.
            </p>
            </Jumbotron>
            </div>
        </div>
    );
};

export default Home;