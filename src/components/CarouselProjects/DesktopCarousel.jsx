import "./CarouselProjects.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import Project from "../Projects/Project";
import { projects } from "../../utils/data/projects";

function DesktopCarousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (position > projects.length - 3) {
      setPosition(projects.length - 3);
    } else if (position < 0) {
      setPosition(0);
    }
  }, [position]);

  function handleRight() {
    setPosition(position + 1);
  }

  function handleLeft() {
    setPosition(position - 1);
  }

  return (
    <section>
      <section className="project__items d-flex flex-wrap">
        {projects.slice(position, position + 3).map((p) => (
          <Project key={p.index} {...p} />
        ))}
      </section>
      <div className="d-flex justify-content-center mt-5">
        <BsChevronLeft
          size={25}
          className="me-4 icon__chevron"
          onClick={handleLeft}
          display={position === 0 && "none"}
        />
        <BsChevronRight
          size={25}
          className="ms-4 icon__chevron"
          onClick={handleRight}
          display={position === projects.length - 3 && "none"}
        />
      </div>
    </section>
  );
}

export default DesktopCarousel;
