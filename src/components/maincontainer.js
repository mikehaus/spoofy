import React, { useState } from 'react';
import Header from './nav/header';
import SideBar from './nav/sidebar';
import Player from './nav/player';
import NavWindowView from './nav/navwindow';
import Login from './login';
import keys from '../api/apikeys';
import '../styles/main.css';

class MainContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            library: [],
            playlists: [],
            loggedIn: true,
        };
    }

    componnentDidMount = () => {

    }

    render () {
        if (this.state.loggedIn === false) {
            return (
                <Login />
            );
        }

        return (
            <div className='container'>
                <Header />
                <SideBar />
                <NavWindowView />
                <Player />
            </div>
        );
    }
}

export default MainContainer;