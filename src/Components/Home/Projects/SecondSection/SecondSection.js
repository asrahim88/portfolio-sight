import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SecondSection = () => {
    return (
        <div className='pb-5'>
            <section className="pb-5">
                <div className="container pb-5">
                    <div className="row pd-5">
                        <div className="col-md-6">

                            {/* gap */}
                            <div className="pt-5">
                                <h4 className="text-info projectName mb-5 text-center">꧁༒☬𝕋𝕖ℂ𝕙 ℝ𝕖ℙ𝕒𝕀𝕣 𝕊𝕖ℝ𝕧𝕀𝕔𝔼☬༒꧂</h4>
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
                        <div className="col-md-6">
                            <div className="p-5">
                                <img src="https://i.ibb.co/zS0DSqv/Screenshot-9.png" className="img-fluid roundedImage" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondSection;