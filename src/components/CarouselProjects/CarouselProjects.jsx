import "./CarouselProjects.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import Project from "../Projects/Project";
import { projects } from "../../utils/data/projects";

function CarouselProjects() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    if (position > projects.length - 1) {
      setPosition(0);
    } else if (position < 0) {
      setPosition(projects.length - 1);
    }
  }, [position]);

  function handleRight() {
    setPosition(position + 1);
    setDirection("left");
  }

  function handleLeft() {
    setPosition(position - 1);
    setDirection("right");
  }

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <section className="d-flex justify-content-center">
        {projects.map(
          (p, i) =>
            position === i && (
              <div data-aos={`zoom-in-${direction}`}>
                <Project key={i} {...p} />
              </div>
            )
        )}
      </section>

      <div className="icons__container">
        <BsChevronLeft
          size={25}
          className="icon__chevron"
          onClick={handleLeft}
        />
        <BsChevronRight
          size={25}
          className="icon__chevron"
          onClick={handleRight}
        />
        {/* <img
          src={arrowLeft}
          alt="arrow left"
          onClick={handleLeft}
          className="arrow__img"
        />
        <img
          src={arrowRight}
          alt="arrow right"
          onClick={handleRight}
          className="arrow__img"
        /> */}
      </div>
    </section>
  );
}

export default CarouselProjects;
