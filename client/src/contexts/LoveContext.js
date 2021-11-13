import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const LoveContext = createContext();

const LoveContextProvider = (props) => {

    const [count, setCount] = useState(0);
    const [loveBooks, setLoveBooks] = useState([]);

    useEffect(() => {
        const getLoveBooks = () => {
            try {
                axios.get(`http://localhost:4000/books/love/${localStorage.getItem('userId')}`)
                    .then(res => { setLoveBooks(res.data.lovebooks); setCount(res.data.lovebooks.length) })
                    .catch(err => console.log(err))
            } catch (error) {
                return error;
            }
        }
        getLoveBooks();
    }, [])

    async function addToMyBooks(book) {
        try {
            const res = await axios.post(`http://localhost:4000/books/add`, book);
            return res;
        } catch (error) {
            return error;
        }
    }

    async function addToLoveBooks(book) {
        try {
            const res = await axios.post(`http://localhost:4000/books/add-love`, book);
            return res;
        } catch (error) {
            return error;
        }
    }

    async function removeFromLoves(idBook) {
        try {
            await axios.delete(`http://localhost:4000/books/remove-love/${idBook}`);
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
    }
    return (
        <LoveContext.Provider value={LoveContextData} >
            {props.children}
        </LoveContext.Provider>
    )
}

export default LoveContextProvider;
