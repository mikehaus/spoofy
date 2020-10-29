import React, { useState, useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiShuffle, BiPlayCircle, BiPauseCircle, BiRepeat } from 'react-icons/bi';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import '../../styles/main.css';
import '../../styles/nav/player.css';

function Player(props) {

    const [recentlyPlayed, setRecentlyPlayed] = useState(null);
    const [currentlyPlaying, updateCurrentlyPlaying] = useState(null);
    const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [currentMinuteCount, setCurrentMinuteCount] = useState(0);
    const [currentSecondCount, SetCurrentSecondCount] = useState(0);
    const [songMinutesTotal, setMinutesTotal] = useState(0);
    const [songSecondsTotal, setSecondsTotal] = useState(0);
    const [isSongPlaying, setSongPlaying] = useState(false);
    const [albumImage, setAlbumImage] = useState(null);
    const [playbackTrack, setPlaybackTrack] = useState(null);

    const [interval, setPlayerInterval] = useState(null);

    useEffect(() => {

        restartTimer();

        props.spotify
            .getMyCurrentPlaybackState()
            .then((playbackData) => {
                console.log('playbackInfo', playbackData);
                setPlaybackAndCurrentlyPlayingStates(playbackData);
                if (playbackData.is_playing) {
                    startTimer();
                }
                setLoaded(true);
            }
        );
        props.spotify
            .getMyCurrentPlayingTrack()
            .then((currentTrackData) => {
                console.log('CurrentTrackInfo: ', currentTrackData);
                console.log('isCurrentlyPlaying: ', isCurrentlyPlaying);
            }
        );
        props.spotify
            .getMyRecentlyPlayedTracks()
            .then((recentlyPlayedTracks) => {
                console.log('recentlyPlayedInfo: ', recentlyPlayedTracks);
                setRecentlyPlayed(recentlyPlayedTracks);
            }
        );
    }, []);

    useEffect(() => {
        if (currentSecondCount === 60) {
            console.log('got to reset mins and seconds');
            setCurrentMinuteCount(currentMinuteCount => parseInt(currentMinuteCount) + 1);
            SetCurrentSecondCount(0);
        }

        if (currentMinuteCount >= songMinutesTotal && currentSecondCount >= songSecondsTotal){
            console.log('switching songs');
            props.spotify
                .getMyCurrentPlayingTrack()
                .then((playbackData) => {
                    restartTimer();
                    console.log('playbackInfo', playbackData);
                    setInterval(null);
                    setPlaybackAndCurrentlyPlayingStates(playbackData);
                }
            );
        }
    }, [currentMinuteCount, currentSecondCount]);

    const restartTimer = () => {
        setCurrentMinuteCount(0);
        SetCurrentSecondCount(0);
    }

    const startTimer = () => {
        setPlayerInterval(setInterval(() => {
            SetCurrentSecondCount(currentSecondCount => parseInt(currentSecondCount) + 1);
        }, 1000));
    }

    const stopTimer = () => {
        clearInterval(interval);
    }

    const setPlaybackAndCurrentlyPlayingStates = (playbackData) => {
        setPlaybackTrack(playbackData.item);
        setAlbumImage(playbackData.item.album.images[0].url);
        setSongPlaying(playbackData.is_playing);
        console.log(isSongPlaying);
        let songTimeTotal = millisToMinsAndSecs(playbackData.item.duration_ms);
        setMinutesTotal(songTimeTotal[0]);
        setSecondsTotal(songTimeTotal[1] - 1);
        console.log('progressMS: ', playbackData.progress_ms);
        let currentProgress = playbackData.progress_ms;
        let songPlaybackTime = millisToMinsAndSecs(currentProgress);
        setCurrentMinuteCount(songPlaybackTime[0]);
        SetCurrentSecondCount(songPlaybackTime[1]);
    }

    const millisToMinsAndSecs = (ms) => {
        let minutes = Math.floor(ms / 60000);
        let seconds = ((ms % 60000) / 1000).toFixed(0);
        console.log('timeCalculated: ', [minutes, seconds]);
        console.log('reloaded')
        return [minutes, seconds];
    }

    const playerToggleSongPlayingState = (e) => {
        e.preventDefault();
        setSongPlaying(!isSongPlaying);
        if (isSongPlaying) {
            props.spotify.pause();
            stopTimer();
        }
        else {
            props.spotify.play();
            startTimer();
        }
    }

    const playerSkipNext = (e) => {
        e.preventDefault();
        props.spotify.skipToNext();
    }

    const playerSkipPrev = (e) => {
        e.preventDefault();
        props.spotify.skipToPrevious();
    }

    return (
        <div className='footer'>
            <div className='player-wrapper'>
                <div className='player-album-info-container'>
                    <div className='player-album-info-picture'>
                        <img 
                            src={albumImage} 
                            height='55px' 
                            width='55px' />
                    </div>
                    <div className='player-album-info-text'>
                        <button
                            className='player-song-name'>
                            { isLoaded ?
                                playbackTrack.name :
                                null }
                        </button>
                        <button 
                            className='player-artist-name'>
                            { isLoaded ?
                                playbackTrack.artists[0].name :
                                null }
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
                                        <MdSkipPrevious 
                                            onClick={playerSkipPrev} />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='player-control-btn player-start'>
                                <IconContext.Provider value={{ size: "40px", className: "global-class-name" }}>
                                    <div>
                                    { isSongPlaying ? (
                                        <BiPauseCircle
                                            onClick={playerToggleSongPlayingState} />
                                        ) : (                            
                                        <BiPlayCircle
                                            onClick={playerToggleSongPlayingState} />
                                        )
                                    }
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='player-control-btn player-forward'>
                                <IconContext.Provider value={{ size: "20px" }}>
                                    <div>
                                        <MdSkipNext
                                            onClick={playerSkipNext} />
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
                                { currentMinuteCount }:{(currentSecondCount < 10 ? '0' : '')}{ currentSecondCount }
                            </div>
                            <div className='player-progress-bar-background'>
                            </div>
                            <div className='player-timer player-timer-right'>
                                { songMinutesTotal }:{(songSecondsTotal < 10 ? '0' : '')}{ songSecondsTotal }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Player;