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

  function authenticateUser(link) {
    console.log('got to authenticate');
    window.open(link, '_self');
  }

  const getInfo = () => {
    //fetch('https://')
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login'>
            <LoginScreen 
              authUser={authenticateUser}/>
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
