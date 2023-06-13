import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact d-flex justify-content-center">
            <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
            <Jumbotron className="contact-jumbotron shadow-md ">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">

                        <div className="m-2">
                            <a href="mailto:victoria.vavulina@outlook.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-success" title="Send an email">
                                    <i className="fa fa-envelope"></i> Email
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/victoriavavulina/" target="_blank"
                               rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/vickneee" target="_blank" rel="noopener noreferrer">
                                <Button className="github" variant="outline-secondary" title="My other projects">
                                    <i className="fab fa-github"></i> GitHub
                                </Button>
                            </a>
                        </div>

                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Contact;
