import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';


const WorkoutCreate = (props) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, rating)
        fetch(`${APIURL}/dog/userbars`, {
            method:'POST',
            body: JSON.stringify({name: name, rating: rating}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setName('');
            setRating('');
            props.fetchWorkouts();
        })
    }
    return(
        <>
        <h3>Add a Spot</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name"/>
                <Input name ="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="rating"/>
                <Input type="select" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </>
    )
}

export default WorkoutCreate;