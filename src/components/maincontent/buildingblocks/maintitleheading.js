import React, { useEffect } from 'react';
import '../../../styles/maincontent/buildingblocks/maintitleheading.css';

function MainTitleHeading(props) {
    return (
        <div className='title__header'>
            <div className='title__heading-text'>
                {props.title}
            </div>
        </div>
    )
}

export default MainTitleHeading;