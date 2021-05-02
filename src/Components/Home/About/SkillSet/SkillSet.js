import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap,faCss3Alt, faJs, faReact, faNodeJs, faNode, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase  } from '@fortawesome/free-solid-svg-icons';
import './SkillSet.css';
{/* <i class="fas faDatabase"></i> */}

const SkillSet = () => {
    return (
        <div className = "pt-5 pb-5">
            <h1 className='text-center mt-5 pb-5 text-white'>Professional <span className='text-info'>SkillSet</span> </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faNodeJs} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faNode} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bootstrapIcon p-5 m-3">
                            <FontAwesomeIcon icon={faDatabase} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSet;