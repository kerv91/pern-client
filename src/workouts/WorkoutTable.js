import React from 'react';
import {Table, Button} from 'reactstrap';

const WorkoutTable = (props) => {

    const deleteWorkout = (workout) => {
        fetch(`http://localhost:3000/dog/${workout.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchWorkouts())
    }

    const workoutMapper = () => {
        return props.workouts.map((workout, index) => {
            return(
                <tr key={index}>
                    <th scope="row"></th>
                    <td>{workout.name}</td>
                    <td>{workout.rating}</td>
                    {/* <td>{workout.definition}</td> */}
                    <td>
                        <Button color="warning">Update</Button>
                        <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Bar's I've Visted</h3>
        <hr/>
        <Table style={{
            color: 'white',
            margin:'40px'
        }} dark>
            <thead>
                <tr>
                    <th></th>
                    <th>Bar</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {workoutMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default WorkoutTable;