import React from 'react';
import {pageLinks, socialLinks} from '../data';
import logo from './../assets/img/logo.svg';
import PageLinks from './../components/PageLinks';
import SocialLink from './../components/SocialLink';

export default function Navbar () {
  
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
      
        <PageLinks parentClass='nav-links' itemClass='nav-link' />
      
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav>
  );
};