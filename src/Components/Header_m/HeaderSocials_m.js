import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'

const HeaderSocials_m = () => {
    return (
        <div className="header__socials">
      <a href="https://www.linkedin.com/in/ar-rahim-501a80182/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/asrahim88" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/taskin.taskinahmed.5/" target="_blank" rel="noreferrer" ><FaFacebook /></a>
    </div>
    );
};

export default HeaderSocials_m;