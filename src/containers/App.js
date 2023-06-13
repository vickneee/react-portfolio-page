import React, { useState, useEffect } from 'react';
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
// import DarkModeToggle from "../components/button-dark-light/ButtonDarkLight";
// import Toggle from "../components/toggle/Toggle";
// import Button from "../components/button/Button";

function App() {
    const [theme, setTheme] = useState('light');

    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // };

    // const toggleTheme = (requestedTheme) => {
    //     if (theme !== requestedTheme) {
    //         setTheme(requestedTheme);
    //     }
    // };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`App ${theme}`}>

            <NavBar className="navbar" />
            <div className="section">
                <Container className="container-box">
                    <Slide top duration={2000}>
                        <Home />
                    </Slide>
                </Container>

            </div>
            <button className="button-dark-light" type="button" onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>

            {/*<button className="button-dark-light" type="button" onClick={() => toggleTheme('dark')}>*/}
            {/*    Dark*/}
            {/*</button>*/}
            {/*<button className="button-dark-light" type="button" onClick={() => toggleTheme('light')}>*/}
            {/*    Light*/}
            {/*</button>*/}

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
                <Footer className="footer" />
            </div>
        </div>
    );
}

export default App;
