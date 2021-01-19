import React, { useState, useEffect } from 'react';
import MainTitleHeading from '../buildingblocks/maintitleheading';
import CarouselContainer from '../buildingblocks/carouselContainer';
import Carousel from '../buildingblocks/carousel';
import '../../../styles/maincontent/main/home.css';

function HomeView(props) {
    
    useEffect(() => {
        console.log('loading in home...')
    }, [props.topTracksRecommended, props.recentlyPlayed]);

    return (
        <div className='home__wrapper'>
            <div className='title__text'>
                <MainTitleHeading
                    title={props.title} />
            </div>
            <div className='home__main-content'>
                <div className='home__top-spacer' />
                <CarouselContainer
                    title='Shortcuts'
                    carouselInfo={props.playlists} />
                <CarouselContainer
                    title='Recently played'
                    carouselInfo={props.recentlyPlayed} />
            </div>
        </div>
    );

}

export default HomeView;