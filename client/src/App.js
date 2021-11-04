import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import './App.css';
import Home from './components/Auth/Home';
import AuthContextProvider from './contexts/AuthContext';
import Layout from './components/layout/Layout'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>
          <Route path='/layout' component={Layout}>
            </Route>
            <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />}>
            </Route>
            <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />}>
            </Route>
            
            <Route exact path='/' component={Home}>
            </Route>
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
