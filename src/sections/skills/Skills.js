import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
import "tachyons";
import Marquee from "react-fast-marquee";

// Skills
import {skills} from "./Skills-DB";
import "./Skills.css";

const Skills = () => {
	return (
		<div className="skills pt-5 pb-5" id="skills">
			<h1 className="text-center font-details-b pb-3">Tools and Tech Skills</h1>
			<Jumbotron className="contact-jumbotron shadow-md db mr-3">
				<Marquee
				gradient={false}
				speed={80}
				pauseOnHover={true}
				pauseOnClick={true}
				delay={0}
				play={true}
				direction="left">
				<div className="d-flex justify-content-around">
					{skills.skillList.map((skill, index) => (
						<span key={index} className="bg-gray-200 rounded-md gap-2 d-flex p-3 m-2">
                                        <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText}
												   className="image-style"></Image>
											 </a>
						<p className="text-center text-blue-950">{skill.skillName}</p>
                                    </span>
					
					))}
				</div>
			</Marquee>
		</Jumbotron>
		</div>
	);
};

export default Skills;
