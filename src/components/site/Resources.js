import React from 'react';
import BarIndex from '../Bars/BarIndex';
import { Table } from 'reactstrap';

const Resources = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Add a new spot!</h1>
                <p>Table that has been commented out that people will input additional bars</p>
                <Table dark>
                <BarIndex/>
                </Table>
            </div>
        </div>
    );
};

export default Resources;