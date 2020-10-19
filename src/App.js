import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from 'react-router-dom';
import MainContainer from './components/maincontainer';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/login';
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isUserAuthenticated: false,
      mainContainerView: '/'
    };
    this.authenticateUser = this.authenticateUser.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  authenticateUser(link) {
    console.log('got to authenticate');
    window.open(link, '_self');
  }

  getInfo = () => {
    //fetch('https://')
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              { this.state.isUserAuthenticated ? 
                <Redirect to='/login' /> :
                <Redirect to='/home' />
              }
            </Route>
            <Route exact path='/home'>
              <MainContainer
                internalView={this.state.mainContainerView} />
            </Route>
            <Route exact path='/login'>
              <LoginScreen 
                authUser={this.authenticateUser}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
