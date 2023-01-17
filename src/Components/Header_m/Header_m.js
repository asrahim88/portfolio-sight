import React from 'react';
import CTA from './CTA';
import HeaderSocials_m from './HeaderSocials_m';
import './Heacder_m.css';

const Header_m = () => {
    return (
        <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>ar_rahim</h1>
        <h5 className="text-light">MERN STACK DEVELOPER</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials_m />
      </div>
    </header>
    );
};

export default Header_m;