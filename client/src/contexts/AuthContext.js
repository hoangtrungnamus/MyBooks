import React, { createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [userId, setUserId] = useState('');
    async function connectToRegister(registerForm) {
        try {
            const res = await axios.post('http://localhost:4000/users/register', registerForm);
            return res;
        } catch (error) {
            return error.message;
        }
    }

    async function connectToLogin(loginForm) {
        try {
            const res = await axios.post('http://localhost:4000/users/login', loginForm);
            console.log(res);
            return res;
        } catch (error) {
            return error.message;
        }
    }

    const AuthContextData = {
        connectToRegister,
        connectToLogin,
        setUserId,
        userId,
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

