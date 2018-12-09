import React from 'react';

import './Header.css';

const logo = require('../../assets/logo.png');

export default function Header() {
  return (
    <nav className="z-depth-0" style={{ backgroundColor: 'transparent !important' }}>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img alt="logo" src={logo} />
        </a>
      </div>
    </nav>
  );
}
