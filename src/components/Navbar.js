import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <img 
        className="navbar__logo" 
        src="https://images.indianexpress.com/2021/01/myntra.png?w=640" 
        alt="Myntra Logo" 
      />
      <div className="navbar__categories">
        <div className="navbar__option">Men</div>
        <div className="navbar__option">Women</div>
        <div className="navbar__option">Kids</div>
        <div className="navbar__option">Home & Living</div>
        <div className="navbar__option">Beauty</div>
        <div className="navbar__option">Studio</div>
      </div>
      <div className="navbar__search">
        <input className="navbar__searchInput" type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="navbar__nav">
        <div className="navbar__option">Profile</div>
        <div className="navbar__option">Wishlist</div>
        <div className="navbar__option">Bag</div>
      </div>
    </div>
  );
}

export default Navbar;
