import React from 'react';
import NavBar from '../Navbar/NavBar';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import Skills from './Skills/Skills';
import SkillSet from './SkillSet/SkillSet';
import Tools from './Tools/Tools';


const About = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="aboutSection">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://i.ibb.co/MZ1w23W/Group-3302387.png" class="img-fluid mt-5" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="text-white  mt-5">
                                    <div className="pt-5">
                                        <h1 className="text-center">KNOW WHO <span className="text-info">I'M</span></h1>
                                        <p className="mt-5 fontSize text-justify">
                                            A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                                    </p>
                                        <p className="fontSize text-justify">
                                            Apart from coding, some other activities that I love to do!
                                    </p>
                                        <p className="ml-5 fontSize">
                                            <span> <FontAwesomeIcon icon={faHandPointRight} /> Playing Games</span> <br />
                                            <span> <FontAwesomeIcon icon={faHandPointRight} /> Watching Movies</span> <br />
                                            <span> <FontAwesomeIcon icon={faHandPointRight} /> Traveling</span>
                                        </p>
                                        <span className=" ml-5 pl-5 coteColor">"Strive to build things that make a different!"</span>
                                        <br />
                                        <span className="downName">__arhaim</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <Skills></Skills>
                </div>
            </div>
            <div>
                <div className="container">
                    <SkillSet></SkillSet>
                </div>
            </div>
            <div>
                <div className="container">
                    <Tools></Tools>
                </div>
            </div>
        </>
    );
};

export default About;