import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import '../../styles/nav/header.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineDown } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Header(props) {

    const [displayName, setDisplayName] = useState(null);

    useEffect(() => {
        props.spotify.getMe()
            .then((userData) => {
                console.log('usrData: ', userData);
                let userDisplayName = userData.display_name;
                setDisplayName(userDisplayName)
            })
    }, [])

    return (
        <div className='header'>
            <div className='header-main-container'>
                <div className='header-view-nav-btn-container'>
                    <IconContext.Provider 
                        value={{ size: '20px' }}>
                        <div className='header-bk-btn'>
                            <IoIosArrowBack />
                        </div>
                        <div className='header-fwd-btn'>
                            <IoIosArrowForward />
                        </div>
                    </IconContext.Provider>
                </div>
                <input
                    type='text' 
                    className='header-search-bar'
                    placeholder='Search' />
                <div className='header-spacer' />
                <div className='header-usr-wrapper'>
                    <div className='header-usr-container'>
                        <div className='header-usr-avatar'>

                        </div>
                        <div className='header-usr-display-txt'>
                            {displayName}
                        </div>
                    </div>
                </div>
                <IconContext.Provider
                    value={{ size: '20px' }}>
                    <div className='header-dropdown'>
                        <AiOutlineDown />
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Header;