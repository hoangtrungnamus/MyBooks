import { createContext } from "react";
import axios from "axios";

export const BookContext = createContext();
const BookContexProvider = (props) => {

    async function createBook(createForm){
        try{
            const addNewBook = await axios.post('http://localhost:4000/books/create', createForm);
            return addNewBook;
        }
        catch(err){

        }
    }

    const BookContextData = {
        createBook,
    }

    return (
        <BookContext.Provider value={BookContextData}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContexProvider
