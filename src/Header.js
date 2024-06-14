import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img 
        className="header__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
        alt="Amazon Logo" 
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <button className="header__searchButton">Search</button>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span>Hello, Sign in</span>
        </div>
        <div className="header__option">
          <span>Returns & Orders</span>
        </div>
        <div className="header__option">
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
