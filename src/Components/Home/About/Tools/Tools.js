import React from 'react';
import './Tools.css';

const Tools = () => {
    return (
        <div>
            <h1 className='text-center mt-5 pt-5 pb-5 text-white'> <span className='text-info'>Tools</span> I Use</h1>
            <div className='row pb-5'>
                <div className="col-md-2">
                    <div className="toolsBox m-2">
                        <img src="https://i.ibb.co/RT4FFDC/Visual-Studio-Code-logo-removebackgraound.png p-5" className="img-fluid" alt="" />
                        <span className="pl-5 text-white">VsCode</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="toolsBox m-2">
                        <img src="https://i.ibb.co/Fg84GXL/git.png" className="img-fluid" alt="" />
                        <span className="pl-5 text-white">GitHub</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="toolsBox m-2">
                        <img src="https://i.ibb.co/zZX257s/logo-google-chrome-internet-4800.png" className="img-fluid" alt="" />
                        <span className="pl-2 text-white">Chrome dev tool</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="toolsBox m-2">
                        <img src="https://i.ibb.co/w0P9CdP/thumb-retina-1a0f3cfe2bda0324ac9f22966c04b2803a0af8eb.png" className="img-fluid p-5" alt="" />
                        <span className="pl-5 text-white">Heroku</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="toolsBox m-2">
                        <img src="https://i.ibb.co/GMF2tMc/default-5dfbb146cf22182bca88c7d07f2515a5888fc12a.jpg" className="img-fluid radiusNetlify" alt="" />
                        <span className="pl-5 text-white">Netlify</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="toolsBox m-2">
                        <img src="https://i.ibb.co/K5J8V0G/default-92414794b88a328cecc4ae62413ea91ea0593726.png" className="img-fluid rounded-top" alt="" />
                        <span className="pl-5 text-white">Atom</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;