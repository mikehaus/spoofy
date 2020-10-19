import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from './nav/header';
import SideBar from './nav/sidebar';
import Player from './nav/player';
import NavWindowView from './nav/navwindow';
import keys from '../api/apikeys';
import '../styles/main.css';

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewInfo: '',
            error: null,
            isLoaded: false,
            library: [],
            playlists: [],
            loggedIn: false,
        };
    }

    updateView = (info) => {
        this.setState({viewInfo: info});
    }

    updateLoggedIn = () => {
        this.setState({ loggedIn: !this.state.loggedIn });
    }

    render () {
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