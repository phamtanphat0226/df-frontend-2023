import React from 'react';
import './Header.css';
import images from '../../assets/images'
import ToggleButton from '../ToggleButton';
import DarkMode from '../../features/DarkMode';


function Header() {
  return (
    <header id="header">
      <section className='header-left'>
        <div className="header__logo">
            <svg className="header__logo-svg" width="39" height="41" viewBox="0 0 39 41">
                <title>logo</title>
                <g fillRule="nonzero" fill="none">
                    <path d="M5.208 40.726c-2.804 0-5.074-2.279-5.074-5.093V5.093C.134 2.278 2.404 0 5.208 0l12.703.015c11.292 0 20.433 9.262 20.285 20.623-.149 11.183-9.438 20.088-20.582 20.088H5.208z" fill="#E13F5E"></path>
                    <path d="M7.76 31.821h-.652a.634.634 0 0 1-.638-.64v-5.108c0-.357.282-.64.638-.64h5.09c.356 0 .638.283.638.64v.655c0 2.815-2.27 5.093-5.075 5.093zM7.108 16.528H22.97c2.804 0 5.075-2.278 5.075-5.092v-.61a.666.666 0 0 0-.668-.67H11.56c-2.805 0-5.075 2.278-5.075 5.092v.64c0 .358.282.64.623.64zM7.108 24.167h8.25c2.805 0 5.075-2.278 5.075-5.092v-.64a.634.634 0 0 0-.638-.64H7.108a.634.634 0 0 0-.638.64v5.092c.015.357.297.64.638.64z" fill="#FFF"></path>
                </g>
            </svg>
            <p className="header__logo-text">dwarves <br/> foundation</p>
        </div>  
      </section>
      <section className='header-right'>
        <DarkMode />
        <div className="header__account">
          <img src={images.avatar} className="header__account-avatar" />
          <p className="header__account-name">Phat Pham</p>
        </div>
      </section>
    </header>
  )
}

export default Header;