import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='site-footer' id='footer'>
      <div className="footer-container">
        <div className="footer-section about-section">
            {/* <img src={assets.logo} alt="" /> */}
            <p>Bistro BALTS maltītes ir izcils risinājums ēdienu piegādei arī uz Tavu biroju vai jebkuru citu darba vietu – sapulcēm, semināriem un citiem pasākumiem vai vienkārši sev un kolēģiem.</p>
            <div className="footer-socials">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-section links-section">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-section contact-section">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+37129020200</li>
                <li>balts@balts.lv</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-text">Copyright 2024 © Batls.lv - All Right Reserved.</p>
    </div>
)
}

export default Footer
