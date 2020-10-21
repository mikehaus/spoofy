import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import '../../styles/nav/player.css';

function Player(props) {

    const [currentlyPlaying, updateCurrentlyPlaying] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [minutesLeft, setMinutes] = useState(0);
    const [secondsLeft, setSeconds] = useState(0);
    const [songMinutesTotal, setMinutesTotal] = useState(0);
    const [songSecondsTotal, setSecondsTotal] = useState(0);

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
            })
      }, [])
        

    return (
        <div className='footer'>
            <div className='player-wrapper'>
                <div className='player-album-info-container'>
                    <div className='player-album-info-picture'>
                        { isLoaded ?
                            null : null
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
                                   currentlyPlaying.item.album.name
                                    ) : (
                                    null
                                    )
                                }
                        </button>
                    </div>
                </div>
                <div className='player-main-container'>
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