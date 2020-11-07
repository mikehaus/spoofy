import React, { useState, useEffect } from 'react';

function InfoCard(props) {

    const [isIconGridVisible, toggleIconGridVisible] = useState(null);

    const changeView = (e) => {
        props.changeView(e);
    }

    const toggleIconGrid = (e) => {
        toggleIconGridVisible(!isIconGridVisible);
    }

    return (
        <div className='info-card-wrapper'>
            <button
                className='info-card-display-img'
                onMouseEnter={toggleIconGrid}
                onMouseLeave={toggleIconGrid}>
                <img src={props.displayImage} />
            </button>
            
        </div>
    );
}