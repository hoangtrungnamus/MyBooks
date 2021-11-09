import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import Dashboard from './Dashboard';
import AddNewBook from './AddNewBook';
import Home from "../Auth/Home";
import { useHistory } from "react-router-dom";
import Header from "../layout/Header";
import Love from './Love';


const Book = (props) => {
    const history = useHistory();
    const { userId } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            history.push('/login');
        }
        else if (userId.length > 0) {
            localStorage.setItem('userId', userId);
        }
        if (localStorage.getItem('userId')) {
            setIsLogin(true);
        }
    }, [history, setIsLogin, userId]);

    let body = (
        (props.bookRoute === 'mybooks' && <Dashboard></Dashboard>) ||
        (props.bookRoute === 'add-new-book' && <AddNewBook></AddNewBook>) ||
        (props.bookRoute === 'love' && <Love></Love>) ||
        (props.bookRoute === 'home' && <Home></Home>) 
    )

    return (
        <div>
            {isLogin && <Header/> }
            {isLogin && body}
        </div>
    )
}

export default Book;
