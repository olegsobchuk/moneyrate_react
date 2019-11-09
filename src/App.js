import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './Components/Login';
import Logout from './Components/Logout';
import './App.css';

function App() {
  let layout
  if (localStorage.getItem("user") !== null) {
    layout = <Router>
      <div>
        <ul>
          <li>
            <Link to='/logout'>Log Out</Link>
          </li>
        </ul>
        <hr />
      </div>

      <Switch>
        <Route exact path='/logout'>
          <Logout />
        </Route>
      </Switch>
    </Router>
  } else {
    layout = <Router>
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
  }
  return (
    <div>
      { layout }
    </div>
  );
}

export default App;
