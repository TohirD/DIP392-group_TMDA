import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar-logo' src={assets.logo} alt="" />
      <img className='user-avatar' src={assets.profile_image} alt="" />
    </div>
  );
}

export default Navbar;
