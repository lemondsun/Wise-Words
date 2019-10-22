import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="home-link">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link>
    </div>
  )
}

export default Header;