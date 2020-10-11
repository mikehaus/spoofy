import React, { useState } from 'react';
import '../styles/login.css';
import keys from '../api/apikeys';

export default function Login(props) {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    const userLogin = () => {
        console.log('hello');
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