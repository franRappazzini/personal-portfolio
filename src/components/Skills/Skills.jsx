import React from "react";
import { Card, Row } from "react-bootstrap";
import javascript from "../../assets/img/javascript.svg";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import react from "../../assets/img/react.svg";
import jquery from "../../assets/img/jquery.svg";
import sass from "../../assets/img/sass.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import ajax from "../../assets/img/ajax.svg";
import npm from "../../assets/img/npm.svg";
import git from "../../assets/img/git.svg";
import firebase from "../../assets/img/firebase.svg";
import Letter from "../Letter/Letter";
import ItemSkill from "./ItemSkill";

function Skills() {
  return (
    <section className="d-flex flex-column align-items-center">
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
