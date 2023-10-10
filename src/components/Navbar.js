// Navbar.js
import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <span>My Candy Shop</span>
      <div className="cart-icon">
        <i className="fa fa-shopping-cart"></i>
        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default Navbar;
