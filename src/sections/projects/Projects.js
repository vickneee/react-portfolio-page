import React from "react";
import {Timeline, Events, UrlButton, ImageEvent, createTheme, themes} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image";

//Css file
import './Project.css';

//Projects
import PortfolioPage from "../../assets/img/projects/PortfolioPage.png";
import RoboFriends from "../../assets/img/projects/RoboFriends.png"
import SuperMarioMemoryGame from "../../assets/img/projects/SuperMarioMemoryGame.png";
import TicTacToe from "../../assets/img/projects/TicTacToe.png";


//Skills
import HTML5 from "../../assets/img/skills/HTML5.png";
import CSS3 from "../../assets/img/skills/CSS3.png";
import JAVASCRIPT from "../../assets/img/skills/JS.jpeg";
import REACT from "../../assets/img/skills/react.png"
import REACTBOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import TAILWINDCSS from "../../assets/img/skills/tailwindcss.svg"
// import NETLIFY from "../../assets/img/skills/netlify.svg";


// Custom Timeline Theme
const customTheme = createTheme(themes.default, {
    card: {
        backgroundColor: '#efefef',
    },
    date: {
        backgroundColor: '#004aad',
    },
    marker: {
        borderColor: '#004aad',
    },
    timelineTrack: {
        backgroundColor: '#004aad',
    },
});

const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline theme={customTheme}>
                <Events>
                    {/* //PortfolioPage */}
                    <ImageEvent
                        date="Jun 2023"
                        className="text-center"
                        text="Portfolio Page"
                        src={PortfolioPage}
                        alt="PortfolioWebsite"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A personal portfolio is an online platform
                                                that showcases an individual's skills, achievements, and experiences.
                                                Made for myself.
                                                <br/>
                                                <hr/>
                                                <br/>
                                                <strong>Tech used:</strong>
                                                <br/><br/>
                                                <ul className="d-flex content-center flex-wrap">
                                                    <li>
                            <span className="p-0">
                              <Image
                                  src={CSS3}
                                  alt="CSS3"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span>
                              <Image
                                  src={JAVASCRIPT}
                                  alt="JavaScript"
                                  rounded
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span>
                              <Image
                                  src={REACT}
                                  alt="React"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span >
                              <Image
                                  src={REACTBOOTSTRAP}
                                  alt="React Bootstrap"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span >
                              <Image
                                  src={TAILWINDCSS}
                                  alt="Tailwind CSS"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                            {/*                        <li>*/}
                            {/*<span >*/}
                            {/*  <Image*/}
                            {/*      src={TAILWINDCSS}*/}
                            {/*      alt="Netlify"*/}
                            {/*      className="image-style m-1 img-style"*/}
                            {/*  ></Image>{" "}*/}
                            {/*</span>*/}
                            {/*                        </li>*/}
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton className="url-button"
                                           href="https://vickneee.github.io/react-portfolio-page/"
                                           target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/vickneee/react-portfolio-page"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* //RoboFriends */}

                    <ImageEvent
                        date="Jun 2023"
                        className="text-center"
                        text="RoboFriends"
                        src={RoboFriends}
                        alt="RoboFriends"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Robots of all shapes and sizes can be
                                                sorted and found using the RoboFriends app's name-search function.
                                                <br/>
                                                <hr/>
                                                <br/>
                                                <strong>Tech used:</strong>
                                                <br/><br/>
                                                <ul className="d-flex content-center ">
                                                    <li>
                            <span>
                              <Image
                                  src={CSS3}
                                  alt="CSS3"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span>
                              <Image
                                  src={JAVASCRIPT}
                                  alt="JavaScript"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span>
                              <Image
                                  src={REACT}
                                  alt="React"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://vickneee.github.io/robo-friends/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/vickneee/robo-friends"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* SuperMarioMemoryGame */}

                    <ImageEvent
                        date="Apr 2023"
                        className="text-center"
                        text="Super Mario Memory Game"
                        src={SuperMarioMemoryGame}
                        alt="Super Mario Memory Game"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong>The Super Mario Memory Game is a digital
                                                adaptation of the classic card-matching game that revolves around the
                                                popular video game character Mario and his friend Luigi.
                                                <br/>
                                                <hr/>
                                                <br/>
                                                <strong>Tech used:</strong>
                                                <br/><br/>
                                                <ul className="d-flex content-center">
                                                    <li>
                            <span>
                              <Image
                                  src={HTML5}
                                  alt="HTML 5"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span >
                              <Image
                                  src={CSS3}
                                  alt="CSS3"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span >
                              <Image
                                  src={JAVASCRIPT}
                                  alt="JavaScript"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://vickneee.github.io/super-mario-memory-game/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/vickneee/super-mario-memory-game"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* //TicTacToe */}

                    <ImageEvent
                        date="Apr 2023"
                        className="text-center"
                        text="Tic-Tac-Toe"
                        src={TicTacToe}
                        alt="Tic-Tac-Toe"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong>Tic Tac Toe is a classic strategy game that
                                                has gained immense popularity in recent years. The game involves two
                                                players who take turns marking a 3x3 grid with Xs and Os until one of
                                                the players succeeds in placing three marks.
                                                <hr/>
                                                <br/>
                                                <strong>Tech used:</strong>
                                                <br/><br/>
                                                <ul className="d-flex content-center">
                                                    <li>
                            <span>
                              <Image
                                  src={HTML5}
                                  alt="HTML 5"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span>
                              <Image
                                  src={CSS3}
                                  alt="CSS 3"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                    <li>
                            <span>
                              <Image
                                  src={JAVASCRIPT}
                                  alt="JavaScript"
                                  className="image-style m-1 img-style"
                              ></Image>{" "}
                            </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://vickneee.github.io/tic-tac-toe/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/vickneee/tic-tac-toe"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
