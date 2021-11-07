import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Book from './components/Book/Book';
import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import BookContexProvider from './components/Book/BookContex';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <BookContexProvider>
            <Switch>
              <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />}>
              </Route>
              <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />}>
              </Route>
              <Route exact path='/my-books' render={props => <Book {...props} bookRoute='mybooks'/>}></Route>
              <Route exact path='/add-new-book' render={props => <Book {...props} bookRoute='add-new-book' />}></Route>
              <Route exact path='/' render={props => <Book {...props} bookRoute='home' />}></Route>
            </Switch>
          </BookContexProvider>
        </AuthContextProvider>
      </Router>

    </div>
  );
}

export default App;
