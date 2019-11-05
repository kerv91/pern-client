import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import BarCreate from './BarCreate';
import BarTable from './BarTable';
import BarEdit from './BarEdit';
import APIURL from '../../helpers/environment';

const BarIndex = (props) => {
    const [bars, setBars] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [barToUpdate, setBarToUpdate] = useState({});

    const fetchBars = () => {
        fetch(`${APIURL}/dog/userbars`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setBars(logData)
            console.log(logData)
        })
    }
    useEffect(() => {
        fetchBars();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="1" />
                <Col md="10">
                    <BarTable bars={bars} fetchBars={fetchBars} token={props.token}/>
                </Col>
                <Col md="1" />

            </Row>
        </Container>
    )
}

export default BarIndex;