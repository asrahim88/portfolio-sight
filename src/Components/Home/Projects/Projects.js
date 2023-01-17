import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';


const Projects = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <section className='pt-4'>
                <div className="container pt-5 pb-5">
                    <div className="row pd-5">
                        <div className="col-md-6">
                            <div className="p-5">
                                <img src="https://i.ibb.co/zS0DSqv/Screenshot-9.png" className="img-fluid roundedImage" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pt-5">
                                <h4 className="text-info projectName mb-5 text-center">꧁༒☬𝕋𝕖ℂ𝕙 ℝ𝕖ℙ𝕒𝕀𝕣 <span class="tecChName">𝕊𝕖ℝ𝕧𝕀𝕔𝔼☬༒꧂</span></h4>
                                <p className="text-white text-justify techService ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum illo commodi molestias adipisci nam animi debitis, exercitationem beatae temporibus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere eaque saepe praesentium omnis deserunt facilis officia corrupti voluptatum quia.
                                </p>
                                <div>
                                    <button type="button" class="btn btn-info m-2 cursor">React</button>
                                    <button type="button" class="btn btn-info m-2 cursor">Bootstrap</button>
                                    <button type="button" class="btn btn-info m-2 cursor">Firebase</button>
                                    <button type="button" class="btn btn-info m-2 cursor">Node</button>
                                    <button type="button" class="btn btn-info m-2 cursor">Express</button>
                                    <button type="button" class="btn btn-info m-2 cursor">MongoDB</button>
                                </div>
                                <div className="text-center">
                                    <Link class="liveSiteIcon mr-5 text-info">
                                        <FontAwesomeIcon icon={faSatellite} />
                                    </Link>

                                    <Link class="liveSiteIcon text-info">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5">
                <SecondSection></SecondSection>
            </div>
            <div>
                <ThirdSection></ThirdSection>
            </div>
        </div>
    );
};
export default Projects;