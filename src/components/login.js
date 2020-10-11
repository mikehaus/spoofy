import React, { useState } from 'react';
import '../styles/login.css';
import { keys } from '../api/apikeys';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export default function LoginScreen(props) {
    // Login Screen Component

    const client_id = keys.client_id;
    const secret = keys.secret;

    const authenticateSpotify = () => {

    }
    
    const userLogin = () => {
        console.log('Authenticating login...');
    };

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