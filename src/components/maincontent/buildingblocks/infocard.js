import React, { useState, useEffect } from 'react';

/* @Props Declaration:
 *    
 *  imgUrl - url of the album, playlist, or category image
 *  name - Name of Album or Playlist (optional)
 *  description - description of album or playlist (optional)
 *  artist - name of artist of album
 *  followers - count of followers for playlist 
 */

/*
 *  @Component - InfoCard
 *
 *  Used to display information
 *  for Home, Browse, Etc views
 *  As a card with optional props depending
 *  on type of card. 
 * 
 *  For reference of what an InfoCard looks
 *  like, go to the home page of the spotify app
 *  and look at any of the album or playlist
 *  shorcuts (it's that box with the image, name, desc, etc.)
 */ 
function InfoCard(props) {

    const [isIconGridVisible, toggleIconGridVisible] = useState(null);
    const [isAlbum, setIsAlbum] = useState(null);
    const [isPlaylist, setIsPlaylist] = useState(null);
    const [isCategory, setIsCategory] = useState(null);

    useEffect(() => {
        if (props.album) {
            setIsAlbum(true);
        } else if (props.playlist) {
            setIsPlaylist(true); 
        } else if (props.category) {
            setIsCategory(true);
        }
    }, [])

    const changeView = (e) => {
        props.changeView(e);
    }

    const toggleIconGrid = (e) => {
        toggleIconGridVisible(!isIconGridVisible);
    }

    return (
        <div className='info-card__wrapper'>
            <button
                className='info-card__display-img'
                onMouseEnter={toggleIconGrid}
                onMouseLeave={toggleIconGrid}>
                <img src={props.imgUrl} />
            </button>
            {  !isCategory ? (
                    <div className='info-card__title'>
                        {props.name}
                    </div>
                ) : null
            } { (isPlaylist) ? (
                    <div className='info-card__artist-description'>
                        {props.description}
                    </div>
                ) : null
            } { (isAlbum) ? (
                    <div className='info-card__artist-description'>
                        {props.artist}
                    </div>
                ) : null
            } { (isPlaylist) ? (
                <div className='info-card__followers'>
                    {props.followers} FOLLOWERS
                </div>
            ) : null
        } 
            
        </div>
    );
}