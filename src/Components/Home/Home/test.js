import React from 'react';

const test = () => {
    return (
        <div>
            <Container fluid className="header-area home-content">
                <Row>
                    <Col md={6} className="home-header">
                        <div className="d-flex justify-content-center ml-5 ml-md-0 animate__backInUp wow animate__animated animate__fast animate__delay-1s">
                            <div>
                                <span className="d-block world" style={{ color: 'rgba(198,201,216,.75)' }}>WELCOME TO MY WORLD</span>
                                <h1 className="title" className="heading">
                                    Hi There! <span className="wave">👋🏻</span>
                                </h1>


                                <h1 className="title text-white">
                                    I’m Maruf Billah
                                </h1>
                                <div style={{ textAlign: "left" }}>
                                    {/* <Type /> */}
                                </div>
                                <h1 className="title text-white">
                                    based in USA.
                                </h1>
                                <Button className="mt-4 downloadCV" variant="primary" href="https://drive.google.com/file/d/1f7MjprPw58cM3vEjiIoQRRVEIBstJMyt/view" target="_blank">
                                    <i className="fas fa-download">&nbsp;</i>Download CV
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src='https://i.ibb.co/C7VT8dR/developer-guide-blog-2.png' alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default test;