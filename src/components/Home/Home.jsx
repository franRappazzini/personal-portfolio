import React from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import FormContact from "../ContactMe/FormContact";
import MyData from "../MyData/MyData";
import ProjectsContainer from "../Projects/ProjectsContainer";
import Skills from "../Skills/Skills";
import "./Home.css";

function Home() {
  return (
    <main className="container">
      <MyData />

      <Skills />

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
