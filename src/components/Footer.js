import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>
        <p>Copyright © 2022 <a target='_blank' rel="noreferrer" href="https://www.cryptoverse.vip/">Cryptoverse Inc.</a></p>
        <p>All Rights Reserved.</p>
      </div>
      <div className='footer-links'>
        <Link to='/'>Home</Link>
        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        <Link to='/news'>News</Link>
      </div>
    </div>
  );
};

export default Footer;