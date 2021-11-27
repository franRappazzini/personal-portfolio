import React from "react";
import FormContact from "../ContactMe/FormContact";
import MyData from "../MyData/MyData";
import ProjectsContainer from "../Projects/ProjectsContainer";
import Skills from "../Skills/Skills";

function Home() {
  return (
    <main className="container">
      <MyData />

      <Skills />

      <ProjectsContainer />

      <FormContact />
    </main>
  );
}

export default Home;
