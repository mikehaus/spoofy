import React, { useState, useEffect } from 'react';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { CgMoreO } from 'react-icons/cg';
import '../../../styles/maincontent/buildingblocks/albumplaylist.css';

/*
 * Component AlbumPlaylistHeader
 * Display at top of AlbumPlaylistView
 * Shows info relating to:
 * Props;
 * type - Either isAlbum or isPlaylist
 * title - name of album or playlist
 * artist - name of artist (Album Only)
 * followerCount - Amount of followers (Playlist only)
 * year - year album
 * creator - who created it (Playlist only)
 * description - description of Playlist (Playlist only)
 */ 



function AlbumPlaylistHeader(props) {

    const [isPlaying, setPlaying] = useState(false);

    const addToFavorites = (e) => {
        e.preventDefault();
    }

    const openMenuModal = (e) => {
        e.preventDefault();
    }

    const togglePlayingStateAlbumPlaylist = (e) => {
        e.preventDefault();
        setPlaying(!isPlaying);
    }

    return (
        <div className='album-playlist'>
            <div className='album-playlist__header--grid'>
                <div className='album-playlist__header--img'>

                </div>
                <div className='album-playlist__header--info-section'>
                    <div className='album-playlist__header--info-type'>
                        { props.isPlaylist ? (
                            <div>
                                PLAYLIST
                            </div>
                            ) : null
                        } { props.isAlbum ? (
                            <div>
                                ALBUM
                            </div>
                            ) : null
                        }
                    </div>
                    <div className='album-playlist__header--title'>
                        {props.title}
                    </div>
                    { props.isPlaylist ? (
                        <div className='album-playlist__header--desc'>
                            {props.description}
                        </div> ) : null
                    }
                    { props.isArtist ? (
                        <div className='album-playlist__header--artist-section'>
                            By <div className='album-playlist__header--artist'>{props.artist}</div>
                        </div> ) : null
                    }
                    <div className='album-playlist__header--other-info'>
                        { props.isAlbum ? (
                            <div>
                                {props.year} <span>&#183;</span> {props.songCount}, {props.hours} hr {props.minutes} mins
                            </div> ) : null
                        } { props.isPlaylist ? (
                            <div>
                                Created by {props.creator} <span>&#183;</span> {props.songCount}, {props.hours} hr {props.minutes} mins
                            </div> ) : null
                        }
                    </div>
                </div>
                <div className='album-playlist__header--bottom-container'>
                    <div className='album-playlist__header--btn-grid'>
                        <button className='a-p__header--btn-play'
                            onClick={togglePlayingStateAlbumPlaylist}>
                            { isPlaying ? 
                                <div>PAUSE</div> : <div>PAUSE</div>
                            }
                        </button>
                        <div className='a-p__header--btn-favorite'>
                            <IconContext.Provider value={{ size: "20px" }}>
                                <div>
                                    <HiOutlineHeart
                                        onClick={addToFavorites} />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='a-p__header--btn-rest'>
                            <IconContext.Provider value={{ size: "20px" }}>
                                <div>
                                    <CgMoreO
                                        onClick={openMenuModal} />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                    { props.isPlaylist ? (
                        <div className='album-playlist__header--follower-count'>
                            {props.followerCount} FOLLOWERS
                        </div> ) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default AlbumPlaylistHeader;