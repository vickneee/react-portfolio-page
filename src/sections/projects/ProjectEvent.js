import React from "react";
import {Accordion, Card, Image} from "react-bootstrap";
import {ImageEvent, UrlButton} from "@merc/react-timeline";

const ProjectEvent = ({date, text, src, alt, description, techUsed, liveLink, sourceCodeLink}) => {
  return (
    <ImageEvent date={date} className="text-center" text={text} src={src} alt={alt}>
      <div className="d-flex justify-content-between flex-column mt-1">
        <div className="d-flex justify-content-between flex-column mt-1">
          <div>
            <Accordion>
              <Card>
                <Accordion.Toggle eventKey="0" className="p-2 text-center accordion-main">
                  PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" className="text-left">
                  <Card.Body>
                    <strong>Description:</strong>
                    <br/>{description} <br/><br/> <strong>Tech used:</strong> <br/>
                    <ul className="d-flex content-center">
                      {techUsed.map((tech, index) => (
                        <li key={index}>
                          <span>
                            <Image src={tech.src} alt={tech.alt} className="image-style m-1 img-style"></Image>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href={liveLink} target="_blank"> SEE LIVE </UrlButton>
                <UrlButton href={sourceCodeLink} target="_blank"> SOURCE CODE </UrlButton>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ImageEvent>
  );
};

export default ProjectEvent;