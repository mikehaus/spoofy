import React, { useEffect, useState } from 'react';
import HomeView from '../maincontent/main/home';
import AlbumPlaylistView from '../maincontent/buildingblocks/albumplaylist';
import MadeForYouView from '../maincontent/main/madeforyou';
import '../../styles/main.css';

function NavWindowView(props) {

    useEffect(() => {
        console.log('placeholder for navwindowview load');
    }, []);

    return (
        <div className='main-window-container'>
            { props.currentView === 'Home' ?
                <HomeView 
                    title={props.currentView}
                    topTracksRecommended={props.topTracksRecommended}
                    recentlyPlayed={props.recentlyPlayed}
                    spotify={props.spotify} /> : null
            } { props.currentView === 'Made For You' ?
                <MadeForYouView
                    title={props.currentView}
                    spotify={props.spotify} /> : null
            } { props.currentView === 'AlbumPlaylist' ?
                <AlbumPlaylistView
                    albumPlaylistId={props.albumPlaylistId}
                    albumOrPlaylist={props.albumOrPlaylist}
                    spotify={props.spotify} /> : null
            }   
        </div>
    )
}

export default NavWindowView;