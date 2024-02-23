import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import StudyDesk from "../../assets/img/about-me/iStock-1165699436.jpg";
import Image from "react-bootstrap/Image";
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
                                <br/> Greetings from my website! I am an enthusiastic software development student who
                                places
                                a lot of emphasis on developing websites and applications that are user-friendly. I'm
                                excited to start this path of creating digital experiences.
                                <br/><br/>
                                React and other frameworks are of particular interest to me, and I
                                appreciate using these potent tools to create dynamic and interactive web solutions. I enjoy using code to make ideas come to life.
                                <br/><br/>
                                In addition to having experience with front-end development, I've also experimented in back-end development using Node.js and studied databases.
                                {/*(This enables me to create reliable and flexible online applications, continuously providing a seamless user experience.)*/}
                                <br/><br/>
                                UI/UX design is something I'm quite interested in, although I haven't had the chance to learn much about it yet. Also, code testing programs are of interest to me.
                                <br/>
                                Thank you for visiting my web page!
                                <br/><br/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;
