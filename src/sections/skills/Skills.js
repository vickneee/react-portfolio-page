import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "tachyons";

// Skills
import { skills } from "./Skills-DB";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills pt-5 pb-5" id="skills">
            <h1 className="text-center font-details-b pb-3">Tools and Tech Skills</h1>
            <Jumbotron className="contact-jumbotron shadow-md content-center">
                <Row className="row">
                    <Col className=" col tc d-flex align-items-center justify-content-center">
                                {skills.skillList.map((skill, index) => (
                                    <span key={index}>
                                        <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} className="image-style m-1"></Image>
                                        </a>
                                    </span>
                                ))}
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Skills;
