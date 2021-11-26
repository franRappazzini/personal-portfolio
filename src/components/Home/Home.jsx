import React from "react";
import FormContact from "../ContactMe/FormContact";
import MyDates from "../MyData/MyData";
import ProjectsContainer from "../Projects/ProjectsContainer";
import Skills from "../Skills/Skills";
import "./Home.css";

function Home() {
  return (
    <main className="container main__container">
      <section
        className="d-flex flex-column justify-content-center section__container"
        style={{ height: "100vh" }}
      >
        <MyDates />
      </section>
      <section
        className="d-flex flex-column justify-content-center section__container"
        style={{ height: "100vh" }}
      >
        <Skills />
      </section>

      {/* <section className=" section__container"> */}
      <ProjectsContainer />
      {/* </section> */}

      <section
        className="d-flex flex-column justify-content-center section__container"
        style={{ height: "100vh" }}
      >
        <FormContact />
      </section>
    </main>
  );
}

export default Home;
