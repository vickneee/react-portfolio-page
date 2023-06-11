import React from "react";
import "./App.css";
import NavBar from "../components/nav-bar/NavBar";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "../sections/skills/Skills";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import Footer from "../components/footer/Footer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="section">
                <Container className="container-box">
                    <Slide top duration={2000}>
                        <Home />
                    </Slide>
                </Container>
            </div>

            <div className="about">
                <Container className="container-box">
                    <Slide left duration={2000}>
                        <About />
                    </Slide>
                </Container>
            </div>

            <div className="skills" id="skills">
                <Container className="container-box">
                    <Slide left duration={2000}>
                        <Skills />
                    </Slide>
                </Container>
            </div>

            <div className="projects" id="projects">
                <Container className="container-box">
                    <Slide left duration={2000}>
                        <hr />
                        <Projects />
                    </Slide>
                </Container>
            </div>

            <div className="contact" id="contact">
                <Container className="container-box">
                    {/*<Slide bottom duration={2000}>*/}
                    <hr />
                    <Contact />
                    {/*</Slide>*/}
                </Container>
                <hr />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
