import React from "react";
import {Timeline, Events, createTheme, themes} from "@merc/react-timeline";
import ProjectEvent from "./ProjectEvent";

// CSS file
import './Project.css';
import {projects} from "./Projects-DB";

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
            {projects.map((project, index) => (
              <ProjectEvent key={index} src={project.src} alt={project.alt} date={project.date} text={project.text}
                            description={project.description} techUsed={project.techUsed}
                            liveLink={project.liveLink} sourceCodeLink={project.sourceCodeLink}/>
            ))}
        </Events>
      </Timeline>
    </div>)
}

export default ProjectTimeline;
