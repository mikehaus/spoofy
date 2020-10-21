import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import '../../styles/nav/player.css';

function Player(props) {

    const [currentlyPlaying, updateCurrentlyPlaying] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        props.spotify
            .getMyCurrentPlayingTrack()
            .then((data) => {
                console.log('TrackInfo: ', data);
                updateCurrentlyPlaying(data);
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
            </div>
        </div>
    );

}

export default Player;