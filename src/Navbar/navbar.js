import React from 'react';
import LeftHeader from './leftHeader';
import RightHeader from './rightHeader';
import '../../styles/nav.scss';

const Navbar = () => {
    return (
        <div className="header-outer-container">
            <div className="header-container">
                <LeftHeader />
                <RightHeader />
            </div>
        </div>
    );
}

export default Navbar;