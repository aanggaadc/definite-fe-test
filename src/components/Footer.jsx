import React from 'react'
import './Footer.scss'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Youtube from '../assets/youtube.svg'
import Mail from '../assets/mail.svg'

export default function Footer() {
    return <footer className='footer-container'>
        <div className='upper-line' />
        <div className='footer-header'>STAY CONNECTED WITH US</div>
        <div className='sosmed-container'>
            <img src={Facebook} alt="facebook" style={{ width: "16px" }} />
            <img src={Twitter} alt="facebook" style={{ width: "27px" }} />
            <img src={Instagram} alt="facebook" style={{ width: "25px" }} />
            <img src={Youtube} alt="facebook" style={{ width: "28px" }} />
            <img src={Mail} alt="facebook" style={{ width: "28px" }} />
        </div>
        <div className='contact-footer'>Contact Us</div>
        <div className='bottom-line' />
        <div className='copyright'>
            Copyright © 2021. <br />
            PT Mitsubishi Motors Krama Yudha Sales Indonesia
        </div>
    </footer>
}