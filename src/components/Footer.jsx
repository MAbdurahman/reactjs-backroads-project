import React from 'react';
import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

export default function Footer () {
  
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link"/>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon"/>;
        })}
      </ul>
      <p className="copyright">
        copyright &copy;
        <span id="date">{new Date().getFullYear()}</span> Backroads Tours Company, all rights reserved
      </p>
    </footer>
  
  );
};