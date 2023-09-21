import React from 'react';
import './Header.css';
import images from '../../assets/images';
console.log(images);
function Header() {
  return (
    <header id="header">
          <section class="header_logo">
            <p>Bookstore</p>
          </section>  
          <section class="header_account">
            <img src={images.avatar} class="header_account-avatar" />
            <p class="header_account-name">Phat Pham</p>
          </section>
        </header>
  )
}

export default Header;