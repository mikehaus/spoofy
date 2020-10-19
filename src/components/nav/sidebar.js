import React, { useState } from 'react';
import '../../styles/main.css';
import '../../styles/nav/sidebar.css';

function SidebarList(props) {
    
    const links = props.linkList;
    const route = 'http://localhost:3000/home/';
    const listItems = links.map((item, index) =>
        <a 
          className='links-in-list'
          href={route + item.link}
          key={index}
          onClick={props.getInfo}
            >
            {item.data}
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

    const getInfo = () => {
        console.log('get info from sidebar');
    }

    const playlist_list = [
        {
            link: 'playlist_foryou',
            data: 'Made For You' 
        },
        {
            link: 'playlist_recent',
            data: 'Recently Played' 
        },
        {
            link: 'playlist_liked',
            data: 'Liked Songs' 
        },
        {
            link: 'playlist_albums',
            data: 'Albums' 
        },
        {
            link: 'playlist_artists',
            data: 'Artists' 
        },
        {
            link: 'playlist_podcast',
            data: 'Podcasts' 
        }
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
                            getInfo={getInfo}
                            linkList={playlist_list} />
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