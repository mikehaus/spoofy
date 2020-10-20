import React, { useState } from 'react';
import '../styles/login.css';
import { Spotify, loginUrl } from '../api/spotify';

export default class LoginScreen extends React.Component {
    // Login Screen Component
    constructor(props) {
        super(props);
        this.userLogin = this.userLogin.bind(this);
        this.authenticateSpotify = this.authenticateSpotify.bind(this);
    }

    authenticateSpotify = () => {
        window.open(loginUrl, '_self');
    }
    
    userLogin = () => {
        console.log('Authenticating login...');
        this.authenticateSpotify();
    }

    render() {
        return (
            <div className='login'>
                <div className='center-box'>
                    <h1>
                        SPOOFY
                    </h1>
                    <button
                        className='login-button'
                        onClick={this.userLogin}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
}