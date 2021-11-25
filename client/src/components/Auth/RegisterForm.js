import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterForm = () => {
    const {connectToRegister} = useContext(AuthContext);
    const history = useHistory();
    const [formState, setFormState] = useState({
        correctUsername: true,
        correctPassword: true,
        matchPassword: true,
    });


    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    function onChangeRegisterForm(event) {
        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });

    }
    let correctUsername = formState.correctUsername;
    let correctPassword = formState.correctPassword;
    let matchPassword = formState.matchPassword;
    async function register(event) {
        event.preventDefault();
        correctUsername = username.length >= 8 ? true : false;
        if (correctUsername) {
            correctPassword = password.length >= 8 ? true : false;
            if (correctPassword) {
                matchPassword = password === confirmPassword ? true : false;
            }
        }
        setFormState({ correctUsername, correctPassword, matchPassword });
        if (correctUsername && correctPassword && matchPassword) {
            console.log('response');
            const response = await connectToRegister(registerForm);
            
            if(response.status === 200) {
                alert("Register successfully");
                history.push('/login');
            }
        }
    }

    const { username, password, confirmPassword } = registerForm;

    return (
        <Form method="POST">
            <Form.Group>
                <Form.Control onChange={onChangeRegisterForm} type="text" placeholder="Username" name="username" value={username}>
                </Form.Control>
                {formState.correctUsername === false ? <Alert variant="danger">Username must be more than 8 character</Alert> : ''}
            </Form.Group>
            <Form.Group className="mt-4">
                <Form.Control onChange={onChangeRegisterForm} type="password" placeholder="Password" name="password" value={password} >
                </Form.Control>
                {formState.correctPassword === false ? (<Alert variant="danger">Password must be more than 8 character</Alert>) : ''}
            </Form.Group>
            <Form.Group className="mt-4">
                <Form.Control onChange={onChangeRegisterForm} type="password" placeholder="Confirm password" name="confirmPassword" value={confirmPassword}>
                </Form.Control>
                {formState.matchPassword === false ? (<Alert variant="danger">Your password does not match!</Alert>) : ''}
            </Form.Group>
            <Form.Group className="mt-2">
                <Button onClick={register} variant="success" type="submit">Register</Button>
                <p style={{ color: "white" }}>Already have a account?</p>
                <Link exact="true" to='/login'><Button> Log in </Button></Link>
            </Form.Group>
        </Form>
    )
}

export default RegisterForm
