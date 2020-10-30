import React from 'react';
import '../../styles/main.css';
import '../../styles/nav/header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header-main-container'>
                <div className='view-nav-btn-container'>
                    <div className='back-button'>

                    </div>
                    <div className='forward-button'>

                    </div>
                </div>
                <input
                    type='text' 
                    className='search-bar'
                    placeholder='Search'>

                </input>
            </div>
        </div>
    );
}

export default Header;