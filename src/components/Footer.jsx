import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3>Contact Us</h3>
        <p>AMSUN Organization</p>
        <p>Phone: +254 456-7890</p>
        <p>Email: info@amsun.org</p>
        <p>Website: <a href="www.amsun-uon.org">wwww.amsun-uon.org</a></p>
      </div>
      <div className="footer__social">
        <h3>Connect with Us</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/amsun">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/amsun">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/amsun">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/amsun">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; {new Date().getFullYear()} AMSUN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
