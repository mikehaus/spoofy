import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgBrowse, CgAdd } from 'react-icons/cg';
import { BiRadio } from 'react-icons/bi';
import { RiAddCircleLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import '../../styles/main.css';
import '../../styles/nav/sidebar.css';

function SidebarListMain(props) {
    
    const links = props.linkList;
    const route = 'http://localhost:3000/home/';
    const listItems = links.map((item, index) =>
        <button
          className='links-in-list playlist-library-link'
          key={index}
          onClick={() => 
            props.getInfo(item.data)} >
            {item.data}
        </button>
    );

    return (
        <div>
            {listItems}
        </div>
    );
}

function SidebarListPlaylists(props) {
    
    const links = props.linkList.items;
    console.log(links);
    const route = 'http://localhost:3000/home/';
    const listItems = links.map((playlist, index) =>
        <button 
          className='links-in-list playlist-library-button'
          key={index} >
            {playlist.name}
        </button>
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

    const [userPlaylists, setPlaylists] = useState(null);
    const [isLoaded, setLoaded] = useState(false)

    const getInfo = (e) => {
        console.log(e);
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

    useEffect(() => {
        props.spotify
            .getUserPlaylists()
            .then((data) => {
                console.log('Playlists: ', data);
                setPlaylists(data);
                setLoaded(true);
            })
      }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='main-nav-btn-container'>
                    <button className='main-nav-btn'>
                        <div className='main-nav-btn-icon'>
                            <IconContext.Provider 
                                value={{ size: "20px" }}>
                                <div>
                                    <AiOutlineHome />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='main-nav-btn-text'>Home</div>
                    </button>    
                    <button className='main-nav-btn'>
                        <div className='main-nav-btn-icon'>
                            <IconContext.Provider 
                                value={{ size: "20px" }}>
                                <div>
                                    <CgBrowse />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='main-nav-btn-text'>Browse</div>
                    </button>
                    <button className='main-nav-btn'>
                        <div className='main-nav-btn-icon'>
                            <IconContext.Provider 
                                value={{ size: "20px" }}>
                                <div>
                                    <BiRadio />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='main-nav-btn-text'>Radio</div>
                    </button>
                </div>
                <div className='main-sidebar-nav'>
                    <h6>YOUR LIBRARY</h6>
                    <div className='link-list'>
                        <SidebarListMain
                            getInfo={getInfo}
                            linkList={playlist_list} />
                    </div>
                    <h6>PLAYLISTS</h6>
                    <div className='link-list'>
                        { isLoaded ? (
                            <SidebarListPlaylists
                                getInfo={getInfo}
                                linkList={userPlaylists} /> ) : (
                            null
                            )
                        }
                    </div>
                </div>
                <div className='bottom-sidebar'>
                    <button className='playlist-create-btn'>
                        <div className='main-nav-btn-icon'>
                            <IconContext.Provider 
                                value={{ size: "30px" }}>
                                <div>
                                    <RiAddCircleLine />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='main-nav-btn-text'>New Playlist</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;