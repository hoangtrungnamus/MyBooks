import React, { createContext, useState } from "react";
import axios from 'axios';
import { apiURL } from '../constant';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    async function connectToRegister(registerForm) {
        try {
            const res = await axios.post(`${apiURL}/users/register`, registerForm);
            return res;
        } catch (error) {
            return error.message;
        }
    }

    async function connectToLogin(loginForm) {
        try {
            const res = await axios.post(`${apiURL}/users/login`, loginForm);
            return res;
        } catch (error) {
            return error.message;
        }
    }

    const AuthContextData = {
        connectToRegister,
        connectToLogin,
        isAuthenticated,
        setIsAuthenticated,
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

