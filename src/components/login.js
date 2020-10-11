import React, { useState } from 'react';
import '../styles/login.css';
import { keys } from '../api/apikeys';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export default function Login(props) {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    setLoaded = () => {
        loaded = true;
    }

    const client_id = keys.client_id;
    const secret = keys.secret;
    
    const userLogin = () => {
        console.log('Authenticating login...');
        fetch('https://accounts.spotify.com/authorize')
            .then(
                (result) => {
                    
                }
            )
    }

    return (
        <div className='login'>
            <div className='center-box'>
                <h1>
                    SPOOFY
                </h1>
                <button
                    onClick={userLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}