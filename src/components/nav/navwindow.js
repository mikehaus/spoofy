import React, { useEffect, useState } from 'react';
import HomeView from '../maincontent/main/home';
import '../../styles/main.css';

function NavWindowView(props) {

    useEffect(() => {
        console.log('placeholder for navwindowview load');
    }, []);

    return (
        <div className='main-window-container'>
            { props.currentView === 'Home' ?
                <HomeView 
                    title={props.currentView} /> : null
            }
        </div>
    )
}

export default NavWindowView;