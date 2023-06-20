import React from 'react';
import './header.css'
import Photo from './images/FarmForwardLogo.png';

const Header = ({loggedInUser }) => {
  return (
    <header className='header'>
      <div className="header-left">
        <img src={Photo} alt="Company Logo" />
        {/* <span className="company-name">Farm Forward</span> */}
      </div>
      <nav className="header-middle">
        <ul>
          <li className='mx-3'><a href="/grants">Grants</a></li>
          <li className='mx-3'><a href="/resources">Resources</a></li>
          <li className='mx-3'><a href="/equipment">Equipment</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <span className="username">Hello John</span>
      </div>
    </header>
  );
};

export default Header;