import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
               <h1>Logo</h1> 
               <div>
                   <a href="/shop">******</a>
                   <a href="/order">******</a>
                   <a href="/products">*******</a>
                   <a href="/about">*******</a>
               </div>
            </nav>
        </div>
    );
};

export default Header;