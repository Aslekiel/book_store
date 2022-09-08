import React from 'react';
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  return <FooterContainer>
    <section className='footer__contacts'>
      <img className='footer__logo' src="./img/footer-logo.svg" alt="footer-logo" />
      <p className='footer__text'>tranthuy.nute@gmail.com</p>
      <p className='footer__text'>(480) 555-0103</p>
    </section>
    <nav className='footer__navigation'>
      <ul className='footer__list'>
        <li className='footer__text'>Home Page</li>
        <li className='footer__text'>Catalog</li>
        <li className='footer__text'>My account</li>
        <li className='footer__text'>Cart</li>
      </ul>
    </nav>
    <section className='footer__adress'>
      <p className='footer__text'>6391 Elgin St. Celina, Delaware 10299</p>
      <img className='footer__map' src="./img/map.jpg" alt="map-img" />
    </section>
  </FooterContainer>;
};

export default Footer;
