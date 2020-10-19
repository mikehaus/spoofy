import React, { useState } from 'react';
import '../../styles/main.css';
import '../../styles/nav/sidebar.css';

function SidebarList(props) {
    
    const links = props.linkList;
    const route = 'http://localhost:3000/';
    const listItems = links.map((link) =>
        <a 
          className='links-in-list'
          href={route + link}
          key={link}
            >
            {link}
        </a>
    );

    return (
        <div>
            {listItems}
        </div>
    );
}

function SideBar(props) {
    /* Main Sidebar component. 
     * Contains Main Nav Button Container nav,
     * LibraryList
     * PlaylistsList
     * NewPlaylist Container */

    const liblist = [
        'hello',
        'this',
        'is',
        'an',
        'example',
        'list'
    ];

    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='main-nav-btn-container'>
                    <button className='main-nav-btn'>Home</button>
                    <button className='main-nav-btn'>Browse</button>
                    <button className='main-nav-btn'>Radio</button>
                </div>
                <div className='main-sidebar-nav'>
                    <h6>YOUR LIBRARY</h6>
                    <div className='link-list'>
                        <SidebarList
                            linkList={liblist} />
                    </div>
                    <h6>PLAYLISTS</h6>
                </div>
                <div className='bottom-sidebar'>
                    
                </div>
            </div>
        </div>
    );
}

export default SideBar;