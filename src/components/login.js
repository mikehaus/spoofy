import React, { useState } from 'react';
import '../styles/login.css';
import { Spotify } from '../api/apikeys';

export default class LoginScreen extends React.Component {
    // Login Screen Component
    constructor(props) {
        super(props);
        this.userLogin = this.userLogin.bind(this);
        this.authenticateSpotify = this.authenticateSpotify.bind(this);
    }

    authenticateSpotify = () => {
        const clientId = Spotify.client_id;
        const redirectUri = Spotify.redirect_uri
        const scopes = Spotify.scopes;
        const endpoint = Spotify.auth_endpoint;
        let auth_link = `${endpoint}?response_type=code&client_id=${clientId}&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}`;
        console.log('got to authenticate');
        this.props.authUser(auth_link);
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