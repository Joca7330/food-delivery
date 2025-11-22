import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore vero error eum quae eligendi labore sapiente cumque ut sed blanditiis, eius similique. Earum tenetur asperiores distinctio inventore illum autem.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Facebook" />
                        <img src={assets.linkedin_icon} alt="Facebook" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>

                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-234-2394</li>
                        <li>contact@juicy.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright' >© 2024 Juicy. All rights reserved. </p>
        </div>
    )
}

export default Footer