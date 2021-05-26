import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <nav className='header navbar navbar-dark navbar-expand bg-dark'>
            <div className='container-lg'>
                <a className='navbar-brand' href='#'>Star DB</a>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='header__link nav-link' href='#'>People</a>
                    </li>
                    <li className='nav-item'>
                        <a className='header__link nav-link' href='#'>Planets</a>
                    </li>
                    <li className='nav-item'>
                        <a className='header__link nav-link' href='#'>Starships</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
