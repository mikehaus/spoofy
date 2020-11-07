import React, { useState, useEffect } from 'react';
import MainTitleHeading from '../buildingblocks/maintitleheading';
import '../../../styles/maincontent/main/home.css';

function HomeView(props) {

    

    return (
        <div className='home-wrapper'>
            <div className='title-text'>
                <MainTitleHeading
                    title={props.title} />
            </div>
            <div className='home-main-content'>

            </div>
        </div>
    );

}

export default HomeView;