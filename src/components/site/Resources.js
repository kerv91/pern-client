import React from 'react';
import WorkoutIndex from '../../workouts/WorkoutIndex';
import { Table } from 'reactstrap';

const Resources = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Add a new spot!</h1>
                <p>Table that has been commented out that people will input additional bars</p>
                <Table dark>
                <WorkoutIndex/>
                </Table>
            </div>
        </div>
    );
};

export default Resources;