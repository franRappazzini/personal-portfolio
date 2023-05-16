import "./Experience.css";

import ItemExperience from "./ItemExperience";
import React from "react";
import { experience } from "../../utils/data/experience";
import { titleConvert } from "../../utils/functions";

const title = "Experience";

const Experience = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center section__container"
      style={{ minHeight: "100vh" }}
    >
      <section className="d-flex" data-aos="fade-up">
        {titleConvert(title)}
      </section>

      <section className="item_experience--container" data-aos="fade-up">
        {experience.map((ex) => (
          <ItemExperience key={ex.i} {...ex} />
        ))}
      </section>
    </section>
  );
};

export default Experience;
