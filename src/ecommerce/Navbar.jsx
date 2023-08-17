import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='navbar'>
          <div className='links d-flex justify-content-between'>
            <div>
             <Link to={'/'}>SHOP</Link>
            </div>
            <div> 
             <Link to={'/cart'}><i class="fa-solid fa-cart-shopping"></i></Link>
            </div>
          </div>  
        </div>
    );
}

export default Navbar;