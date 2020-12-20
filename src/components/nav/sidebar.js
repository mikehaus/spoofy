import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgBrowse, CgAdd } from 'react-icons/cg';
import { BiRadio } from 'react-icons/bi';
import { RiAddCircleLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import '../../styles/main.css';
import '../../styles/nav/sidebar.css';
import { act } from 'react-dom/test-utils';

function SidebarListLibrary(props) {
    
    const links = props.linkList;
    let activeNav = props.activeNav;
    const route = 'http://localhost:3000/home/';
    const listItems = links.map((item, index) =>
        <button
          className='links-in-list playlist-library-btn'
          key={index}
          onClick={props.toggleActive} >
            { activeNav === item.data ?
                <div className='selected' /> :
                null 
            }
            <div className='link-text'>
                {item.data}
            </div>
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
    let activeNav = props.activeNav;
    const route = 'http://localhost:3000/home/';
    const listItems = links.map((playlist, index) => 
        <button 
          className='links-in-list playlist-library-btn'
          key={index}
          onClick={props.toggleActive} >
            { activeNav === playlist.name ? 
                <div className='selected' /> :
                null
            }
            <div className='link-text' id={playlist.id}>
                {playlist.name}
            </div>
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
    const [isLoaded, setLoaded] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        props.spotify
            .getUserPlaylists()
            .then((data) => {
                setPlaylists(data);
                setLoaded(true);
            });
    }, []);

    const toggleActive = (e) => {
        e.preventDefault();
        let nameText = e.target.innerText;
        let id = e.target.id;
        setActiveNav(nameText);
        if (nameText === 'Home' || nameText=='Browse' || nameText==='Radio') {
            props.changeCurrentView(nameText);
        } else {
            console.log('ID ', id);
            props.changeCurrentView('AlbumPlaylist');
            props.setId(id);
            props.setAlbumOrPlaylist('playlist');
        }
    }

    const toggleLibrary = (e) => {
        e.preventDefault();
        let nameText = e.target.innerText;
        let id = e.target.id;
        setActiveNav(nameText);
        props.changeCurrentView(nameText);
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
                    <button className='main-nav-btn'
                        onClick={toggleActive}>
                        { activeNav === 'Home' ? (
                            <div className='selected' />    
                                ) : (
                                    null
                            ) 
                        }
                        <div className='main-nav-btn-icon'>
                            <IconContext.Provider 
                                value={{ size: "20px" }}>
                                <div>
                                    <AiOutlineHome />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='main-nav-btn-text'>
                            Home
                        </div>
                    </button>    
                    <button className='main-nav-btn'
                        onClick={toggleActive}>
                        { activeNav === 'Browse' ? (
                            <div className='selected' />    
                                ) : (
                                    null
                            ) 
                        } 
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
                    <button className='main-nav-btn'
                        onClick={toggleActive}>
                        { activeNav === 'Radio' ? (
                            <div className='selected' />    
                                ) : (
                                    null
                            ) 
                        }
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
                        <SidebarListLibrary
                            activeNav={activeNav}
                            toggleActive={toggleLibrary}
                            linkList={playlist_list} />
                    </div>
                    <h6>PLAYLISTS</h6>
                    <div className='link-list'>
                        { isLoaded ? (
                            <SidebarListPlaylists
                                linkList={userPlaylists}
                                activeNav={activeNav}
                                toggleActive={toggleActive} /> 
                            ) : (                            
                                null
                            )
                        }
                    </div>
                </div>
                <div className='bottom-sidebar'>
                    <button className='playlist-create-btn'>
                        <div className='playlist-create-nav-btn-icon'>
                            <IconContext.Provider 
                                value={{ size: "30px" }}>
                                <div>
                                    <RiAddCircleLine />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='playlist-create-nav-btn-text'>New Playlist</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;