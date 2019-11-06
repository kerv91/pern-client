import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';


const DTTable = (props) => {
    const [dt, setDt] = useState([]);
    
    const fetchDT = () => {
        fetch(`${APIURL}/bars/getDT`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
        })
    }).then( (res) => res.json())
    .then((dtData) => {
        setDt(dtData)
        console.log(dtData)
    })
}

useEffect(() =>{
    fetchDT();
}, [])

const DTMapper = () => {
    return dt.map((dt, index) => (
        <tr key={index}>
            <th scope="row">{dt.bar}</th>
            <td>{dt.address}</td>
            <td>{dt.phone}</td>
        </tr>
    ))
}


return(
    <>
    <h3>DT Bars</h3>
    <Table dark>
        <thead>
            <tr>
                <th>Bar Name</th>
                <th>Address</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {DTMapper()}
        </tbody>
    </Table>
    </>
)
}

export default DTTable;