import React, { useState, useEffect } from 'react';
import MainTitleHeading from '../buildingblocks/maintitleheading';
import CarouselContainer from '../buildingblocks/carouselContainer';
import Carousel from '../buildingblocks/carousel';
import '../../../styles/maincontent/main/home.css';

function HomeView(props) {

    const [topTracksRecommended, setTopTracksRecommended] = useState(null);
    
    useEffect(() => {
        props.spotify
            .getMyTopTracks()
            .then((topData) => {
                console.log('topTracksDataHome: ', topData);
                setTopTracksRecommended(topData);
            })
    }, [])

    return (
        <div className='home__wrapper'>
            <div className='title__text'>
                <MainTitleHeading
                    title={props.title} />
            </div>
            <div className='home__main-content'>
                <div className='home__top-spacer' />
                <CarouselContainer />
            </div>
        </div>
    );

}

export default HomeView;