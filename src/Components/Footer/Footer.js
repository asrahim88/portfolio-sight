import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear();


    return (

        <div className='container margin-custom'>
            <div className='custom'>
                <div className='m-4'>
                    <p>
                        Design and developed by|| <small className='name-color'> ar_rahim</small>
                    </p>
                </div>
                <div className='m-4'>
                    <p className='copy text-center'>
                        <span> Copyright © - {date} all rights reserved</span>
                    </p>
                </div>
                <div className='m-4'>
                    <p className='text-center'>
                        <AiFillGithub />
                        <BsLinkedin className='mr-4 ml-4'/>
                        <FaFacebookSquare />
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Footer;