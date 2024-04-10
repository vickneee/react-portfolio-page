import React from "react";
import {Timeline, Events, createTheme, themes} from "@merc/react-timeline";
import ProjectEvent from "./ProjectEvent";

// CSS file
import './Project.css';

// Projects
import MyDiamonds from "../../assets/img/projects/MyDiamonds.png";
import MounTours from "../../assets/img/projects/Mountours.png";
import PortfolioPage from "../../assets/img/projects/PortfolioPage.png";
import TicTacToe from "../../assets/img/projects/TicTacToe.png";

// Skills
import HTML5 from "../../assets/img/skills/html5.png";
import CSS3 from "../../assets/img/skills/css3.png";
import SASS from "../../assets/img/skills/sass.png";
import JAVASCRIPT from "../../assets/img/skills/js.jpeg";
import REACT from "../../assets/img/skills/react-d.png"
import REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import TAILWINDCSS from "../../assets/img/skills/tailwindcss.svg"
import NETLIFY from "../../assets/img/skills/netlify.png";
import RENDER from "../../assets/img/skills/render.png";


// Custom Timeline Theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  }, date: {
    backgroundColor: '#004aad',
  }, marker: {
    borderColor: '#004aad',
  }, timelineTrack: {
    backgroundColor: '#004aad',
  },
});

const ProjectTimeline = () => {
  return (
    <div className="pt-5 pb-5" id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* // MyDiamonds */}
          <ProjectEvent src={MyDiamonds} alt="myDiamonds" date="Feb 2024" text="myDiamonds 💎"
                        description="To prevent losing my Diamonds, I created a basic website for my web development resources, so they will be all in one place. 💎"
                        techUsed={[{src: HTML5, alt: "HTML 5"}, {src: CSS3, alt: "CSS 3"}, {
                          src: JAVASCRIPT, alt: "JavaScript"
                        }, {src: RENDER, alt: "Render"}]}
                        liveLink="https://mydiamonds.onrender.com/"
                        sourceCodeLink="https://github.com/vickneee/myDiamonds"/>
          {/* // MounTours */}
          <ProjectEvent src={MounTours} alt="Mountours" date="Jul 2023" text="Mountours"
                        description="A fictional travel agency UI page. Want to get away from the noise of the town and be surrounded by the beauty of nature? Welcome to Mountours, where we give you all the details you need to organize your upcoming mountain vacation."
                        techUsed={[{src: HTML5, alt: "HTML 5"}, {src: CSS3, alt: "CSS 3"}, {
                          src: SASS, alt: "Sass"
                        }, {src: JAVASCRIPT, alt: "JavaScript"}, {src: NETLIFY, alt: "Netlify"}]}
                        liveLink="https://mountours.netlify.app/"
                        sourceCodeLink="https://github.com/vickneee/mountours"/>
          {/* // PortfolioPage */}
          <ProjectEvent src={PortfolioPage} alt="PortfolioWebsite" date="Jun 2023" text="Portfolio Page"
                        description="A personal portfolio is an online platform that showcases an individual's skills, achievements, and experiences."
                        techUsed={[{src: CSS3, alt: "CSS 3"}, {src: REACT, alt: "React"}, {
                          src: REACT_BOOTSTRAP, alt: "React Bootstrap"
                        }, {src: TAILWINDCSS, alt: "Tailwind CSS"}, {src: NETLIFY, alt: "Netlify"}]}
                        liveLink="https://victoriavavulina.netlify.app/"
                        sourceCodeLink="https://github.com/vickneee/react-portfolio-page"/>
          {/* // TicTacToe */}
          <ProjectEvent src={TicTacToe} alt="Tic-Tac-Toe" date="Apr 2023" text="Tic-Tac-Toe"
                        description="Tic Tac Toe is a classic strategy game that has gained immense popularity in recent years. The game involves two players who take turns marking a 3x3 grid with Xs and Os until one of the players succeeds in placing three marks."
                        techUsed={[{src: HTML5, alt: "HTML 5"}, {src: CSS3, alt: "CSS 3"}, {
                          src: JAVASCRIPT, alt: "JavaScript"
                        }, {src: NETLIFY, alt: "Netlify"}]}
                        liveLink="https://tic-tac-toe-vickneee.netlify.app/"
                        sourceCodeLink="https://github.com/vickneee/tic-tac-toe"/>
        </Events>
      </Timeline>
    </div>)
}

export default ProjectTimeline;
