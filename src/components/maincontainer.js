import React, { useState } from 'react';
import SideBar from './sidebar';
import Player from './player';
import '../styles/main.css';

function MainContainer() {

    return (
        <div className='container'>
            <SideBar />
            <Player />
        </div>
    );
}

export default MainContainer;