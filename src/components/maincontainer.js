import React, { useState } from 'react';
import Header from './nav/header';
import SideBar from './nav/sidebar';
import Player from './nav/player';
import NavWindowView from './nav/navwindow';
import '../styles/main.css';

function MainContainer() {

    return (
        <div className='container'>
            <Header />
            <SideBar />
            <NavWindowView />
            <Player />
        </div>
    );
}

export default MainContainer;