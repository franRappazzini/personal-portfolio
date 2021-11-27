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
  const skills = [
    {
      title: "Javascript",
      img: javascript,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "HTML",
      img: html,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS",
      img: css,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "React JS",
      img: react,
      href: "https://reactjs.org/",
    },
    {
      title: "jQuery",
      img: jquery,
      href: "https://jquery.com/",
    },
    {
      title: "Sass",
      img: sass,
      href: "https://sass-lang.com/",
    },
    {
      title: "Bootstrap",
      img: bootstrap,
      href: "https://getbootstrap.com/",
    },
    {
      title: "AJAX",
      img: ajax,
      href: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX",
    },
    {
      title: "npm",
      img: npm,
      href: "https://www.npmjs.com/",
    },
    {
      title: "Git",
      img: git,
      href: "https://git-scm.com/",
    },
    {
      title: "Firebase",
      img: firebase,
      href: "https://firebase.google.com/",
    },
  ];

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
                {skills.map((s) => (
                  <ItemSkill key={s.title} {...s} />
                ))}
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </section>
  );
}

export default Skills;
