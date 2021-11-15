import { createContext } from "react";
import axios from "axios";
import { apiURL } from '../constant';


export const BookContext = createContext();
const BookContexProvider = (props) => {


    async function createBook(createForm){
        try{
            const addNewBook = await axios.post(`${apiURL}/books/create`, createForm);
            return addNewBook;
        }
        catch(err){
            return err;
        }
    }

    async function editBook(formEdit){
        try {
            const edit = await axios.put(`${apiURL}/books/edit`, formEdit);
            return edit;
        } catch (error) {
            return error;
        }
    }

    async function deleteBook(_id){
        try {
            const bookDelete = await axios.delete(`${apiURL}/books/delete/${_id}`);
            return bookDelete;
        } catch (error) {
            return error;
        }
    }

    const BookContextData = {
        createBook,
        editBook,
        deleteBook,
    }

    return (
        <BookContext.Provider value={BookContextData}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContexProvider
