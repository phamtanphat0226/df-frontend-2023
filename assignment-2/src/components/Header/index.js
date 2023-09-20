import React from 'react';
import "../Header/styles.css";
import Avatar from "../Avatar";
import images from "../../assets/images";

function Header() {
  return (
    <header id="header">
          <section className="header_logo">
            <a href="#" className="header_logo-link">
              <img src={images.logo} alt="" className="header_logo-img"/>
            </a>
          </section>  
          <section className="header_account">
            <Avatar />
            <p className="header_account-name">Phat Pham</p>
          </section>
        </header>
  )
}

export default Header