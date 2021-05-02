import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div>
            <h1 className="text-center mt-5 mb-5 text-white">MY  <span className="coteColor">SKILLS!</span> </h1>
            <div className="pb-3">
                <h3 className="text-white">HTML-5</h3>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">CSS-3</h3>
                <div class="progress">
                    <div class="progress-bar yellowGreen" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">JAVASCRIPT</h3>
                <div class="progress">
                    <div class="progress-bar javaScript" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">REACT.JS</h3>
                <div class="progress">
                    <div class="progress-bar ReactJs" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">MATERIAL-UI</h3>
                <div class="progress">
                    <div class="progress-bar materialUi" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">NODE.JS</h3>
                <div class="progress">
                    <div class="progress-bar nodeJs" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">EXPRESS JS</h3>
                <div class="progress">
                    <div class="progress-bar expressJs" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">MONGODB</h3>
                <div class="progress">
                    <div class="progress-bar mongoDb" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
            </div>
            <div className="pb-3">
                <h3 className="text-white">FIREBASE</h3>
                <div class="progress">
                    <div class="progress-bar fireBase" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;