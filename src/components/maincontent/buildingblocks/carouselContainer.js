import React from 'react';

function CarouselContainer(props) {


    return (
        <div className='carousel-container__wrapper'>
            <div className='carousel-container__header'>
                
            </div>
            <div>
                {props.Carousel}
            </div>
        </div>
    );
}