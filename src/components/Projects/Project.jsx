import "./Project.css";

import { Card } from "react-bootstrap";
import React from "react";
import exportLink from "../../assets/svg/exportLink.svg";
import github from "../../assets/svg/github.svg";

function Project({ img, title, description, link, githubLink }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project__link d-flex">
      <Card style={{ width: "18rem" }} bg="dark" className="project__article mb-3">
        <Card.Img variant="top" src={img} className="img__project" title="Ver sitio" />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <a
            href={githubLink}
            title="Ver en GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2 img__footer--project"
          >
            <img src={github} alt="github" width="25" />
          </a>
          <a
            href={link}
            title="Ver sitio"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-2 img__footer--project"
          >
            <img src={exportLink} alt="github" width="25" />
          </a>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default Project;
