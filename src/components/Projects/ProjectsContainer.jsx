import "./Project.css";

import Carousel from "../Carousel/Carousel";
import React from "react";
import { titleConvert } from "../../utils/functions";

const title = "Projects";

function ProjectsContainer() {
  return (
    <section style={{ height: "100vh" }} className="d-flex flex-column justify-content-center">
      <section className="d-flex justify-content-center" data-aos="zoom-in-up">
        {titleConvert(title)}
      </section>

      <Carousel />

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
