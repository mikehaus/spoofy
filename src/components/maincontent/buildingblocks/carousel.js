import React, { useEffect, useState } from 'react';
import InfoCard from './infocard';
import Slider from 'react-slick';

function CardList(props) {
    
    const infoList = props.infoList;
    const listitems = infoList.map((item, index) =>
        <InfoCard
            index={index} />
    );

    return(
        <div>
            {listitems}
        </div>
    );
}

function Carousel(props) {

    const [displayedInfo, setDisplayedInfo] = useState(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        setDisplayedInfo(props.displayedInfo);
        console.log('carouselDisplayedInfo: ', displayedInfo);
    }, [displayedInfo]);

    useEffect(() => {
        setDisplayedInfo(props.displayedInfo);
        let carouselSettings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false
                    }
            }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false
                    }
    
            }]
        };
        setSettings(carouselSettings);
    }, []);

    return(
        <div>
            <Slider {...settings}>
                {/*<CardList
                    infoList={displayedInfo} />*/}
            </Slider>
        </div>
    );

}

export default Carousel;