import { createContext, useState } from 'react';
import axios from 'axios';
import {apiURL} from '../constant';

export const LoveContext = createContext();

const LoveContextProvider = (props) => {
    const [count, setCount] = useState(0);
    const [loveBooks, setLoveBooks] = useState([]);

    

    async function addToMyBooks(book) {
        try {
            const res = await axios.post(`${apiURL}/books/add`, book);
            return res;
        } catch (error) {
            return error;
        }
    }

    async function addToLoveBooks(book) {
        try {
            const res = await axios.post(`${apiURL}/books/add-love`, book);
            return res;
        } catch (error) {
            return error;
        }
    }

    async function removeFromLoves(idBook) {
        try {
            await axios.delete(`${apiURL}/books/remove-love/${idBook}`);
        } catch (error) {
            return error;
        }
    }

    const LoveContextData = {
        setCount,
        count,
        loveBooks,
        addToMyBooks,
        addToLoveBooks,
        removeFromLoves,
        setLoveBooks
    }
    return (
        <LoveContext.Provider value={LoveContextData} >
            {props.children}
        </LoveContext.Provider>
    )
}

export default LoveContextProvider;
