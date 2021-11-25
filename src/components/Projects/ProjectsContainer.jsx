import React from "react";
import Project from "./Project";
import screenReact from "../../assets/img/screenReact.png";
import screenMessage from "../../assets/img/screenMessage.png";
import screenMaga from "../../assets/img/screenMaga.png";
import Letter from "../Letter/Letter";

function ProjectsContainer() {
  const projects = [
    {
      img: screenReact,
      title: "Proyecto final ReactJS",
      description:
        "Sitio creado con ReactJS para entrega final del curso en Coderhouse",
      githubLink:
        "https://github.com/franRappazzini/Proyecto_Final_React_Coder",
      link: "https://proyecto-final-react-coder.vercel.app/",
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
      <section className="d-flex justify-content-center">
        <Letter letter="P" />
        <Letter letter="r" />
        <Letter letter="o" />
        <Letter letter="j" />
        <Letter letter="e" />
        <Letter letter="c" />
        <Letter letter="t" />
        <Letter letter="s" />
      </section>

      <section className="d-flex justify-content-between flex-wrap">
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </section>

      <div className="d-flex justify-content-center mt-3">
        <a
          href="https://github.com/franRappazzini"
          className="btn btn-outline-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
      </div>
    </section>
  );
}

export default ProjectsContainer;
