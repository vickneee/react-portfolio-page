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
        <div className="about" id="about">
            <div className="pt-5 pb-5">
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
                                <br/> Greetings from my website! I am an enthusiastic software engineering student focused on mobile development, with a strong interest in creating user-friendly websites and applications. I enjoy building digital experiences that are both practical and easy to use.
                                <br/><br/>
                                I am especially interested in full-stack development and enjoy working with JavaScript/TypeScript, Java and Kotlin to build dynamic and interactive applications. I like using code to turn ideas into working solutions.
                                <br/><br/>
                                In addition to front-end development, I have experience with back-end development using Node.js and Express.js, as well as working with databases.
                                {/*(This enables me to create reliable and flexible online applications, continuously providing a seamless user experience.)*/}
                                <br/><br/>
                                I also value UI/UX design for creating user-friendly software and understand the importance of testing and automation in ensuring high-quality code.
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
