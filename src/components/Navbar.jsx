import React from 'react'
import './Navbar.scss'
import Logo from '../Logo.svg'
import Euro4 from '../assets/Euro4-logo.png'
import HamburgerLogo from '../assets/hamburger-logo.svg'
import DownLogo from '../assets/Down.svg'

export default function Navbar() {
    return (
        <nav id='navbar'>
            <div className='navbar-container'>
                <div className='navbar-brand'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='navbar-menu'>
                    <ul className='navbar-item'>
                        <li className='navbar-list'>
                            <img src={Euro4} alt="euro4" />
                        </li>
                        <li className='navbar-list'>
                            ABOUT US
                            <img src={DownLogo} alt="down" style={{ width: "20px" }} />
                        </li>
                        <li className='navbar-list'>
                            EXPLORE CARS
                            <img src={DownLogo} alt="down" style={{ width: "20px" }} />
                        </li>
                        <li className='navbar-list'>PROMO</li>
                        <li className='navbar-list'>
                            NEWS & EVENT
                            <img src={DownLogo} alt="down" style={{ width: "20px" }} />
                        </li>
                    </ul>
                    <div className='navbar-humberger'>
                        <img src={HamburgerLogo} alt="humberger" />
                    </div>
                </div>
            </div>
        </nav>
    )
}