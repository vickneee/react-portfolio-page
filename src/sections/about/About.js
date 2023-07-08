import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import StudyDesk from "../../assets/img/about-me/iStock-1165699436.jpg";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
import "tachyons";

const About = () => {
    return (
        <div id="about">
            <div>
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>

                <Container>
                    <Row className=" pb-3 align-items-center ma3">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center">
                                <Image className="study justify-content-end img-filter-grayscale shadow-md"
                                       alt="Image with filter" src={StudyDesk}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="my-details p3 br4 ma2">
                                <br/> Greetings from my website! I am an enthusiastic web development student who places
                                a lot of emphasis on developing websites and applications that are user-friendly. I'm
                                excited to start this path of creating digital experiences.
                                <br/><br/>
                                JavaScript, React, and other frameworks are of particular interest to me, and I
                                appreciate using these potent tools to create dynamic and interactive web solutions. I
                                enjoy using code to make ideas come to life, whether it's creating responsive interfaces
                                or adding advanced functionality.
                                <br/><br/>
                                In addition to having experience with front-end development, I've also experimented in
                                back-end development using Node.js and studied databases.
                                {/*(This enables me to create reliable and flexible online applications, continuously providing a seamless user experience)*/}
                                <br/><br/>
                                In order to improve my abilities, I am actively looking for knowledge about UI and UX
                                design. I am learning how to use Figma software to create user interfaces that are easy
                                to use and focused on the expectations and tastes of the user. Thank you for visiting my
                                web page!
                                <br/><br/>
                                {/*<Col className="d-flex justify-content-center flex-wrap">*/}
                                {/*  <div>*/}
                                {/*    <a href="https://drive.google.com/file/d/1CTgIKZRxE_VC7zdjqZPaJPVtF17qRKWn/view?usp=sharing" target="_blank" rel="noopener noreferrer">*/}
                                {/*      <Button className="m-2" variant="outline-success">*/}
                                {/*        My Resume*/}
                                {/*      </Button>*/}
                                {/*    </a>*/}
                                {/*  </div>*/}
                                {/*<div>*/}
                                {/*  <a href="https://github.com/vickneee" target="_blank" rel="noopener noreferrer">*/}
                                {/*    <Button className="m-2" variant="outline-dark">*/}
                                {/*      GitHub*/}
                                {/*    </Button>*/}
                                {/*  </a>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*  <a href="https://www.linkedin.com/in/victoriavavulina/" target="_blank" rel="noopener noreferrer">*/}
                                {/*    <Button className="m-2" variant="outline-primary">*/}
                                {/*      LinkedIn*/}
                                {/*    </Button>*/}
                                {/*  </a>*/}
                                {/*</div>*/}
                                {/*</Col>*/}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;
