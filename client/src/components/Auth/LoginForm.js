import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


const LoginForm = () => {
    const { connectToLogin, setUserId } = useContext(AuthContext);
    const [isCorrect, setIsCorrect] = useState(true);
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const { username, password } = loginForm;
    function onChangeLoginForm(event) {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    }

    async function login(event) {
        event.preventDefault();
        const res = await connectToLogin(loginForm);
        if (res.status !== 200) {
            setIsCorrect(false);
        }
        else {
            console.log('Login successfully!');
            setUserId(res.data.userId);
            localStorage.setItem('userId', res.data.userId);
            window.location.assign('/');
        }
    }


    return (
        <Form method="POST">
            <Form.Group>
                <Form.Control onChange={onChangeLoginForm} name="username" type="text" placeholder="Username" value={username}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-4">
                <Form.Control onChange={onChangeLoginForm} name="password" type="password" placeholder="Password" value={password}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                {!isCorrect && <Alert variant="danger">Your username or password is incorrect!</Alert>}
                <Button onClick={login} variant="success" type="submit"> Log in
                </Button>
                <p style={{ color: "white" }}>Do not have a account?</p>
                <Link exact="true" to='/register'> <Button> Register now</Button></Link>
            </Form.Group>
        </Form>
    )
}

export default LoginForm
