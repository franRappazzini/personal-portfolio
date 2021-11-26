import React from "react";
import { Card, Row } from "react-bootstrap";
import javascript from "../../assets/svg/javascript.svg";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import react from "../../assets/svg/react.svg";
import jquery from "../../assets/svg/jquery.svg";
import sass from "../../assets/svg/sass.svg";
import bootstrap from "../../assets/svg/bootstrap.svg";
import ajax from "../../assets/svg/ajax.svg";
import npm from "../../assets/svg/npm.svg";
import git from "../../assets/svg/git.svg";
import firebase from "../../assets/svg/firebase.svg";
import Letter from "../Letter/Letter";
import ItemSkill from "./ItemSkill";

function Skills() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center section__container"
      style={{ height: "100vh" }}
    >
      <section className="d-flex" data-aos="fade-up">
        <Letter letter="S" />
        <Letter letter="k" />
        <Letter letter="i" />
        <Letter letter="l" />
        <Letter letter="l" />
        <Letter letter="s" />
      </section>

      <section className="d-flex justify-content-center" data-aos="fade-up">
        <Card bg="dark" style={{ width: "80%" }} className="mb-2">
          <Card.Body>
            <Card.Text>
              <Row>
                <ItemSkill
                  href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                  img={javascript}
                  title="JavaScript"
                />
                <ItemSkill
                  href="https://developer.mozilla.org/es/docs/Web/HTML"
                  img={html}
                  title="HTML"
                />
                <ItemSkill
                  href="https://developer.mozilla.org/es/docs/Web/CSS"
                  img={css}
                  title="CSS"
                />
                <ItemSkill
                  href="https://reactjs.org/"
                  img={react}
                  title="React"
                />
                <ItemSkill
                  href="https://jquery.com/"
                  img={jquery}
                  title="jQuery"
                />
                <ItemSkill
                  href="https://sass-lang.com/"
                  img={sass}
                  title="Sass"
                />
                <ItemSkill
                  href="https://getbootstrap.com/"
                  img={bootstrap}
                  title="Bootstrap"
                />
                <ItemSkill
                  href="https://developer.mozilla.org/es/docs/Web/Guide/AJAX"
                  img={ajax}
                  title="AJAX"
                />
                <ItemSkill
                  href="https://www.npmjs.com/"
                  img={npm}
                  title="npm"
                />
                <ItemSkill href="https://git-scm.com/" img={git} title="Git" />
                <ItemSkill
                  href="https://firebase.google.com/"
                  img={firebase}
                  title="Firebase"
                />
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </section>
  );
}

export default Skills;
