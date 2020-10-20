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
import keys from '../api/spotify';
import '../styles/main.css';

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: props.userEmail,
            spotify: props.spotify
        };
    }

    render () {
        return (
                <div className='container'>
                    <Header />
                    <SideBar 
                        spotify={this.state.spotify}
                        userEmail={this.state.userEmail} />
                    <NavWindowView />
                    <Player />
                </div>
            );
    }
}

export default MainContainer;