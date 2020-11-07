import React, { useEffect } from 'react';
import '../../../styles/maincontent/buildingblocks/maintitleheading.css';

function MainTitleHeading(props) {
    return (
        <div className='title-header'>
            <div className='title-heading-text'>
                {props.title}
            </div>
        </div>
    )
}

export default MainTitleHeading;