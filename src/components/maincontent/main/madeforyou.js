import React, { useState, useEffect } from 'react';
import MainTitleHeading from '../buildingblocks/maintitleheading';
import CarouselContainer from '../buildingblocks/carouselContainer';
import Carousel from '../buildingblocks/carousel';
import '../../../styles/maincontent/main/home.css';

function MadeForYouView(props) {

    useEffect(() => {
        console.log('Loading in MadeForYou...');
    }, [])

    // For this I can basically reUse Home Styles
    return (
        <div className='home__wrapper'>
            <div className='title__text'>
                <MainTitleHeading
                    title={props.title} />
            </div>
            <div className='home__main-content'>
                <div className='home__top-spacer' />
                <CarouselContainer
                    title='Podcasts And More'
                    carouselInfo={props.mainPodcastLists} />
                <CarouselContainer
                    title='Uniquely Yours'
                    carouselInfo={props.madePersonalMixes} />
                <CarouselContainer
                    title='Your Daily Mixes'
                    carouselInfo={props.madeDailyMixes} />
                <CarouselContainer
                    title='Discover New Music'
                    carouselInfo={props.madeDiscoverNew} />
                <CarouselContainer
                    title='Even More'
                    carouselInfo={props.madeEvenMore} />
            </div>
        </div>
    );

}

export default MadeForYouView;