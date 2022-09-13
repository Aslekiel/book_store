import { Link } from 'react-router-dom';
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__wrapper">
        <section className="footer__contacts">
          <img
            className="footer__logo"
            src="./img/footer-logo.svg"
            alt="footer-logo"
          />
          <p className="footer__text">tranthuy.nute@gmail.com</p>
          <p className="footer__text">(480) 555-0103</p>
        </section>
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li>
              <Link className="footer__link" to={'/'} >
                Home Page
              </Link>
            </li>
            <li>
              <Link className="footer__link" to={'/catalog'} >
                Catalog
              </Link>
            </li>
            <li>
              <Link
                className="footer__link" to={'/user-profile'}
              >
                My account
              </Link>
            </li>
            <li>
              <Link className="footer__link" to={'/cart'} >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <section className="footer__adress">
          <p className="footer__text">6391 Elgin St. Celina, Delaware 10299</p>
          <img className="footer__map" src="./img/map.jpg" alt="map-img" />
        </section>
      </div>
    </FooterContainer>
  );
};

export default Footer;