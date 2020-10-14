import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import MainContainer from './components/maincontainer';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <LoginScreen />
          <Route path='/login'>
          </Route>
          <Route path='/main'>
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
