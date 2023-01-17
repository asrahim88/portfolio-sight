import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './Intro.css';
import { FaChess } from "@react-icons/all-files/fa/FaChess";
import { IoBook } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";

const Intro = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1 year</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>

                    <div className="text-white">
                        <div className='description'>
                            <div className='mt-3'>
                                A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                            </div>
                            <p className='ml-5 part'>
                                Apart from coding, some other activities that I love to do!
                            </p>
                            <p className='ml-5 otherPart'>
                                <span> <FaChess /> Playing Games</span> <br />
                                <span > <IoBook /> Reading Books</span> <br />
                                <span> <SiYourtraveldottv /> Traveling</span>
                            </p>
                            <p className=" ml-5 pl-5 coteColor">"Strive to build things that make a different!"</p>
                            <p className="downName">__arhaim</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Intro;