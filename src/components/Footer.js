import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <div className="footer__apps">
            <img 
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" 
              alt="Google Play Store" 
            />
            <img 
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" 
              alt="Apple App Store" 
            />
          </div>
          <div className="footer__social">
            <h4>KEEP IN TOUCH</h4>
            <div className="footer__socialIcons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Myntra</p>
        <p>In case of any concern, <a>Contact Us</a></p>
      </div>
    </div>
  );
}

export default Footer;
