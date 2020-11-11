import React from 'react';
import '../../../styles/maincontent/buildingblocks/carouselcontainer.css'
import Carousel from './carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineDown } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function CarouselContainer(props) {

    return (
        <div className='carousel-container__wrapper'>
            <div className='carousel-container__header'>
                <div className='carousel-container__header--title'>
                    Test
                </div>
                <div className='carousel-container__header--spacer' />
                <IconContext.Provider 
                    value={{ size: '25px' }}>
                    <div className='carousel-container__header--btn-left'>
                        <IoIosArrowBack />
                    </div>
                    <div className='carousel-container__header--btn-right'>
                        <IoIosArrowForward />
                    </div>
                </IconContext.Provider>
            </div>
            <div>

            </div>
        </div>
    );
}

export default CarouselContainer;