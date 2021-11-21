import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import MyBooks from './MyBooks';
import AddNewBook from './AddNewBook';
import Home from "./Home";
import { useHistory } from "react-router-dom";
import Header from "../layout/Header";
import Love from './LoveBooks';
import axios from 'axios';
import { apiURL } from '../../constant';
import setAuthToken from '../../utils/setAuthToken';

const Book = (props) => {
    const history = useHistory();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        const checkValid = async () => {
            if (localStorage.getItem('accessToken')) {
                setAuthToken(localStorage.getItem('accessToken'));
                const res = await axios.get(`${apiURL}/users/validedToken`);
                if(res.status === 200){
                    setIsAuthenticated(true);
                }
            }
            else history.push('/login')
        }
        checkValid();
    }, [history, setIsAuthenticated]);

    let body = (
        (props.bookRoute === 'mybooks' && <MyBooks></MyBooks>) ||
        (props.bookRoute === 'add-new-book' && <AddNewBook></AddNewBook>) ||
        (props.bookRoute === 'love' && <Love></Love>) ||
        (props.bookRoute === 'home' && <Home></Home>)
    )

    return (
        <div className="bg-add">
            {isAuthenticated && <Header />}
            {isAuthenticated && body}
        </div>
    )
}

export default Book;
