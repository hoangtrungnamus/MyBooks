import Header from "./Header"
import Dashboard from "../Book/Dashboard";
import { Route, Switch } from "react-router-dom";
import AddNewBook from "../Book/AddNewBook";
import BookContexProvider from "../Book/BookContex";

const Layout = () => {
    return (
        <BookContexProvider>
            <Header />
            <Switch>
                <Route exact path="/layout">
                    <Dashboard />
                </Route>
                <Route path="/layout/add-new-book">
                    <AddNewBook />
                </Route>
            </Switch>
        </BookContexProvider>
    )
}

export default Layout
