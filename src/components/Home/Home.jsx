import "./Home.css";

import Experience from "../Experience/Experience";
import FormContact from "../ContactMe/FormContact";
import MouseTooltip from "react-sticky-mouse-tooltip";
import MyData from "../MyData/MyData";
import ProjectsContainer from "../Projects/ProjectsContainer";
import React from "react";
import Stack from "../Stack/Stack";

function Home() {
  return (
    <main className="container">
      <MyData />

      <Experience />

      <Stack />

      <ProjectsContainer />

      <FormContact />

      {/* cursor desktop */}
      <MouseTooltip visible={true} offsetX={-7} offsetY={-7}>
        <div className="cursor"></div>
      </MouseTooltip>
    </main>
  );
}

export default Home;
