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

function App() {
  return (
    <Router>
      <div>
        <MainContainer />  
      </div>
    </Router>
  );
}

export default App;
