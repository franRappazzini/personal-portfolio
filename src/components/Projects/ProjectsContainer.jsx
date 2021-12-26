import "./Project.css";

import Letter from "../Letter/Letter";
import Project from "./Project";
import React from "react";
import screenMaga from "../../assets/img/screenMaga.png";
import screenMessage from "../../assets/img/screenMessage.png";
import screenReact from "../../assets/img/screenReact.png";

function ProjectsContainer() {
  const projects = [
    {
      img: screenReact,
      title: "Proyecto final ReactJS",
      description:
        "Sitio creado con ReactJS para entrega final del curso en Coderhouse",
      githubLink:
        "https://github.com/franRappazzini/Proyecto_Final_React_Coder",
      link: "https://proyecto-final-react-coder-one.vercel.app/",
    },
    {
      img: screenMessage,
      title: "JavaScript Message App",
      description: "Sitio de mensajeria creado con JavaScript, HTML y CSS",
      githubLink: "https://github.com/franRappazzini/MessagesApp",
      link: "https://franrappazzini.github.io/MessagesApp/",
    },
    {
      img: screenMaga,
      title: "Sitio para Magali",
      description: "Landing Page creada para Magali Gonzalez",
      githubLink: "https://github.com/franRappazzini/proyectoMagali",
      link: "https://www.magaligonzalezoficial.com.ar/",
    },
  ];

  return (
    <section>
      <section className="d-flex justify-content-center" data-aos="zoom-in-up">
        <Letter letter="P" />
        <Letter letter="r" />
        <Letter letter="o" />
        <Letter letter="j" />
        <Letter letter="e" />
        <Letter letter="c" />
        <Letter letter="t" />
        <Letter letter="s" />
      </section>

      <section className="project__items d-flex flex-wrap">
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </section>

      <div className="d-flex justify-content-center mt-3">
        <a
          href="https://github.com/franRappazzini"
          className="btn btn-outline-light mb-3 btn__ver-mas"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in-up"
        >
          More
        </a>
      </div>
    </section>
  );
}

export default ProjectsContainer;
