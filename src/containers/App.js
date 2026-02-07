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

function App() {
    const [theme, setTheme] = useState('light');
    const [isButtonVisible, setButtonVisible] = useState(true);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            const threshold = 30; // Adjust this value to change when the button should hide

            if (currentPosition > threshold) {
                setButtonVisible(false);
            } else {
                setButtonVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`App ${theme}`}>

            {isButtonVisible && (
                <button className="right-corner-button" type="button" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            )}
            
            <NavBar className="navbar"/>
            <div className="section">
                <Container className="container-box"> <Slide top duration={2000}> <Home toggleTheme={toggleTheme}/>
                </Slide> </Container>
            </div>
            
            <div className="about">
                <Container className="container-box"> <Slide left duration={2000}> <About/> </Slide> </Container>
            </div>
            
            <div className="skills" id="skills">
                <Container className="container-box"> <Slide left duration={2000}> <Skills/> </Slide> </Container>
            </div>
            
            <div className="projects" id="projects">
                <Container className="container-box"> <hr/> <Projects/> </Container>
            </div>

            <div className="contact" id="contact">
                <Container className="container-box">
                    <Slide bottom duration={2000}>
                    <hr />
                    <Contact />
                    </Slide>
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
