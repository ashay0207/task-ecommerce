import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <div className="links d-flex justify-content-between">
        {isLoggedIn && (
          <div>
            <Link to={'/Shop'}>SHOP</Link>
          </div>
        )}
        {isLoggedIn && ( 
          <div>
            <Link to={'/cart'}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        )}
      </div>

      <div className="login links">
        <Link to={'/'}>LOGIN</Link>
      </div>
    </div>
  );
}

export default Navbar;
