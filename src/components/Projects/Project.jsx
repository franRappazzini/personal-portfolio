import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css";
import github from "../../assets/img/github.svg";
import exportLink from "../../assets/img/exportLink.svg";

function Project({ img, title, description, link, githubLink }) {
  return (
    <Card
      style={{ width: "18rem" }}
      bg="dark"
      className="project__article mb-3"
      data-aos="zoom-in-up"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "9rem", objectFit: "cover" }}
        />
      </a>

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
          className="me-2"
        >
          <img src={github} alt="github" width="25" />
        </a>
        <a
          href={link}
          title="Ver sitio"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-2"
        >
          <img src={exportLink} alt="github" width="25" />
        </a>
      </Card.Footer>
    </Card>
  );
}

export default Project;
