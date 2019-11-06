import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/dog/login`, {
        method: 'POST',
        body: JSON.stringify({user:{username: username, password: password}}),
        headers: new Headers({
            'Content-Type':'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken);
    })
}

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="email" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Email" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Min 6 characters' pattern="(?=.*[a-z]).{6,12}" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;