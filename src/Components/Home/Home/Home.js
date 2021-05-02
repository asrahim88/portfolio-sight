import React from 'react';
import Navbar from '../Navbar/NavBar';
import { Container, Button } from "react-bootstrap";
import './Home.css';
import TypeWrite from './TypeWrite/TypeWrite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <div className="row">
                    <div className="col-md-6 text-white homeContent">
                        <div className="divContainer d-flex align-content-center">
                            <div>
                                <span className="text-white ">WELCOME TO MY WORLD</span>
                                <h1 className="mt-5">Hi there!
                                    <span className="hand">👋</span>
                                </h1>
                                <h1>
                                    I'm Abdur Rahim
                                    </h1>
                                <div>
                                    <TypeWrite></TypeWrite>
                                </div>
                                <h1>
                                    I'M FROM BANGLADESH
                                    </h1>
                                <Button className="mt-5" variant="info" href="https://drive.google.com/file/d/1Fa-oAbPTmv56KcIZf17kE5rXS-ULkQ_u/view?usp=sharing" target="_blank"> <FontAwesomeIcon icon={faDownload} /> Download Resume
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src="https://i.ibb.co/frDp6kj/23.png" class="img-fluid mt-2 ml-2" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;