import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from './nav/header';
import SideBar from './nav/sidebar';
import Player from './nav/player';
import NavWindowView from './nav/navwindow';
import keys from '../api/spotify';
import '../styles/main.css';

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: props.userEmail,
            spotify: props.spotify,
            currentView: 'Home',
            topTracksRecommended: null,
            recentlyPlayed: null
        };
        this.changeCurrentView = this.changeCurrentView.bind(this);
        this.setTopTracksRecommended = this.setTopTracksRecommended.bind(this);
        this.setRecentlyPlayed = this.setRecentlyPlayed.bind(this);
    }

    componentDidMount = () => {
        this.state.spotify
            .getMyTopTracks()
            .then((topData) => {
                this.setTopTracksRecommended(topData);
                console.log('topTracksRecommendedHome: ', topData);
            });
        this.state.spotify
            .getMyRecentlyPlayedTracks()
            .then((recentlyPlayedData) => {
                this.setRecentlyPlayed(recentlyPlayedData);
            });
    }
    
    changeCurrentView = (viewName) => {
        this.setState({ currentView: viewName });
    }

    setTopTracksRecommended = (topData) => {
        this.setState({ topTracksRecommended: topData });
    }

    setRecentlyPlayed = (recentlyPlayedData) => {
        this.setState({ recentlyPlayed: recentlyPlayedData })
    }

    render () {
        return (
                <div className='container'>
                    <Header 
                        spotify={this.state.spotify}/>
                    <SideBar 
                        spotify={this.state.spotify}
                        userEmail={this.state.userEmail}
                        changeCurrentView={this.changeCurrentView} />
                    <NavWindowView
                        spotify={this.state.spotify}
                        topTracksRecommended={this.state.topTracksRecommended}
                        recentlyPlayed={this.state.recentlyPlayed}
                        currentView={this.state.currentView} />
                    <Player 
                        spotify={this.state.spotify} />
                </div>
            );
    }
}

export default MainContainer;