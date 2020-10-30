import React, { useState, useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiShuffle, BiPlayCircle, BiPauseCircle, BiRepeat, BiCalculator } from 'react-icons/bi';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { IconContext } from "react-icons";
import '../../styles/main.css';
import '../../styles/nav/player.css';
import { RiContactsBookUploadLine } from 'react-icons/ri';

function Player(props) {

    const [recentlyPlayed, setRecentlyPlayed] = useState(null);
    const [currentlyPlaying, updateCurrentlyPlaying] = useState(null);
    const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [currentMinuteCount, setCurrentMinuteCount] = useState(0);
    const [currentSecondCount, setCurrentSecondCount] = useState(0);
    const [songMinutesTotal, setMinutesTotal] = useState(0);
    const [songSecondsTotal, setSecondsTotal] = useState(0);
    const [isSongPlaying, setSongPlaying] = useState(false);
    const [albumImage, setAlbumImage] = useState(null);
    const [playbackTrack, setPlaybackTrack] = useState(null);
    const [songDurationSeconds, setSongDurationSeconds] = useState(null);
    const [songProgressSeconds, setSongProgressSeconds] = useState(null);
    const [songProgressBarWidth, setSongProgressBarWidth] = useState(null);

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
            .getMyDevices()
            .then((deviceData) => {
                console.log('devicesData: ', deviceData);
            }
        );

        props.spotify
            .getMyRecentlyPlayedTracks()
            .then((recentlyPlayedTracks) => {
                setRecentlyPlayed(recentlyPlayedTracks);
            }
        );
    }, []);

    useEffect(() => {
        let currentSongPercentage = (songProgressSeconds / songDurationSeconds) * 100;
        setSongProgressBarWidth({
            width: `${currentSongPercentage}%`
        });

        if (currentSecondCount === 60) {
            setCurrentMinuteCount(currentMinuteCount => parseInt(currentMinuteCount) + 1);
            setCurrentSecondCount(0);
        }

        if (currentMinuteCount >= songMinutesTotal && currentSecondCount >= songSecondsTotal){
            props.spotify
                .getMyCurrentPlayingTrack()
                .then((playbackData) => {
                    restartTimer();
                    setInterval(null);
                    setPlaybackAndCurrentlyPlayingStates(playbackData);
                }
            );
        }
    }, [currentMinuteCount, currentSecondCount]);

    const restartTimer = () => {
        setCurrentMinuteCount(0);
        setCurrentSecondCount(0);
    }

    const startTimer = () => {
        setPlayerInterval(setInterval(() => {
            setCurrentSecondCount(currentSecondCount => parseInt(currentSecondCount) + 1);
            setSongProgressSeconds(songProgressSeconds => parseInt(songProgressSeconds) + 1);
        }, 1000));
    }

    const stopTimer = () => {
        clearInterval(interval);
    }

    const setPlaybackAndCurrentlyPlayingStates = (playbackData) => {
        setPlaybackTrack(playbackData.item);
        setAlbumImage(playbackData.item.album.images[0].url);
        setSongPlaying(playbackData.is_playing);

        let songTimeTotal = millisToMinsAndSecs(playbackData.item.duration_ms);
        setMinutesTotal(songTimeTotal[0]);
        setSecondsTotal(songTimeTotal[1]);

        let songDuration = parseInt((songTimeTotal[0] * 60)) + parseInt(songTimeTotal[1]);
        console.log('songDuration: ', songDuration)
        setSongDurationSeconds(songDuration);
        let currentProgress = playbackData.progress_ms;
        let songPlaybackTime = millisToMinsAndSecs(currentProgress);

        setCurrentMinuteCount(songPlaybackTime[0]);
        setCurrentSecondCount(songPlaybackTime[1] - 2);

        console.log('playbackMins: ', songPlaybackTime[0], songPlaybackTime[1]);

        let songProgress = parseInt((songPlaybackTime[0] * 60)) + parseInt(songPlaybackTime[1]);
        console.log('songProgress: ', songProgress);
        setSongProgressSeconds(songProgress);
        console.log('')

        let currentSongPercentage = Math.round((songProgress / songDuration) * 100);
        console.log('CurrentSongPercentage: ', currentSongPercentage);

        setSongProgressBarWidth({
            width: `${Math.round(currentSongPercentage)}%`
        });
    }

    const millisToMinsAndSecs = (ms) => {
        let minutes = Math.floor(ms / 60000);
        let seconds = ((ms % 60000) / 1000).toFixed(0);
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
                                <div
                                    style={songProgressBarWidth}    
                                    className='player-progress-bar-overlay' />
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