import React, { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiShuffle, BiPlayCircle, BiPauseCircle, BiRepeat } from 'react-icons/bi';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import '../../styles/main.css';
import '../../styles/nav/player.css';

function Player(props) {

    const [currentlyPlaying, updateCurrentlyPlaying] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [minutesLeft, setMinutes] = useState(0);
    const [secondsLeft, setSeconds] = useState(0);
    const [songMinutesTotal, setMinutesTotal] = useState(0);
    const [songSecondsTotal, setSecondsTotal] = useState(0);
    const [isSongPlaying, setSongPlaying] = useState(null);
    const [albumImage, setAlbumImage] = useState(null);

    useEffect(() => {
        props.spotify
            .getMyCurrentPlayingTrack()
            .then((data) => {
                console.log('TrackInfo: ', data);
                updateCurrentlyPlaying(data);
                setMinutes(0);
                setSeconds(0);
                setMinutesTotal(0);
                setSecondsTotal(0);
                setLoaded(true);
                setSongPlaying(false);
                setAlbumImage(data.item.album.images[0].url);
            })
      }, [])

    
        

    return (
        <div className='footer'>
            <div className='player-wrapper'>
                <div className='player-album-info-container'>
                    <div className='player-album-info-picture'>
                        { isLoaded ? (
                                <img 
                                    src={albumImage} 
                                    height='55px' 
                                    width='55px' />
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className='player-album-info-text'>
                        <button
                            className='player-song-name'>
                                { isLoaded ? (
                                   currentlyPlaying.item.name
                                    ) : (
                                    null
                                    )
                                }
                        </button>
                        <button 
                            className='player-artist-name'>
                                { isLoaded ? (
                                   currentlyPlaying.item.artists[0].name
                                    ) : (
                                    null
                                    )
                                }
                        </button>
                    </div>
                </div>
                <div className='player-main-container'>
                    <div className='player-control-buttons'>
                        <div className='player-control-grid'>
                            <div className='player-control-btn player-shuffle'>
                                <BiShuffle />
                            </div>
                            <div className='player-control-btn player-back'>
                                <IconContext.Provider value={{ size: "20px" }}>
                                    <div>
                                        <MdSkipPrevious />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='player-control-btn player-start'>
                                <IconContext.Provider value={{ size: "40px", className: "global-class-name" }}>
                                    <div>
                                    {
                                        isSongPlaying && isLoaded ? (
                                            <BiPlayCircle />
                                        ) : (
                                            <BiPauseCircle />
                                        )
                                    }
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='player-control-btn player-forward'>
                                <IconContext.Provider value={{ size: "20px" }}>
                                    <div>
                                        <MdSkipNext />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='player-control-btn player-repeat'>
                                    <BiRepeat />
                            </div>
                        </div>
                    </div>
                    <div className='player-progress'>
                            <div className='player-timer player-timer-left'>
                                { minutesLeft }:{ secondsLeft }{ secondsLeft }
                            </div>
                            <div className='player-progress-bar-background'>
                            </div>
                            <div className='player-timer player-timer-right'>
                                { songMinutesTotal }:{ songSecondsTotal }{ songSecondsTotal }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Player;