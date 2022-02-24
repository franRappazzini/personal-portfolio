import "./Project.css";

import Letter from "../Letter/Letter";
import Project from "./Project";
import React from "react";
import { projects } from "../../utils/data/projects";

function ProjectsContainer() {
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
