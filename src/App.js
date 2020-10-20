import React, { useState, useEffect } from 'react';
import MainContainer from './components/maincontainer';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/login';
import { render } from '@testing-library/react';
import { getTokenFromUrl } from './api/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null)
  const [userEmail, setUserEmail] = useState(null);

  // Runs code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('user: ', user);
        setUserEmail(userEmail)
      })
    }

    console.log('GOT TOKEN: ', token);
  }, [])

  return (
    <div>
      {
        token ? (
          <MainContainer 
            spotify={spotify}
            userEmail={userEmail}/>
         ) : (
          <LoginScreen /> 
         )
      }
    </div>
  );
  
}

export default App;

// STOPPED AT 1:30