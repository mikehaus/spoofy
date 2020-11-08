import React, { useState, useEffect } from 'react';
import MainTitleHeading from '../buildingblocks/maintitleheading';
import '../../../styles/maincontent/main/home.css';

function HomeView(props) {

    

    return (
        <div className='home__wrapper'>
            <div className='title__text'>
                <MainTitleHeading
                    title={props.title} />
            </div>
            <div className='home__main-content'>

            </div>
        </div>
    );

}

export default HomeView;