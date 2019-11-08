import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
        </ul>
        <hr />
      </div>

      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
