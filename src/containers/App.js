import React from "react";
import "./App.css";
import NavBar from "../components/navBar/NavBar";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "../sections/skills/Skills";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import Footer from "../components/footer/Footer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className="section">
                <Container className="container-box">
                    <Fade top duration={2000}>
                        <Home/>
                    </Fade>
                </Container>
            </div>

            <div className="about">
                <Container className="container-box">
                    <Fade left duration={2000}>
                        <About/>
                    </Fade>
                </Container>
            </div>
            <div className="skills">
                <div>
                    <Container className="container-box">
                        <Fade right duration={2000}>
                            <Skills/>
                        </Fade>
                    </Container>
                </div>

                <div className="projects">
                    <Container className="container-box">
                        <Slide left duration={3000}>
                            <hr/>
                            <Projects/>
                        </Slide>
                    </Container>
                </div>
            </div>

            <div className="contact">
                <Container className="container-box">
                    <Fade right duration={3000}>
                        <hr/>
                        <Contact/>
                    </Fade>
                </Container>
                <hr/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
