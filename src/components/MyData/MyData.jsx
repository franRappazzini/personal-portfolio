import "./MyData.css";
import "aos/dist/aos.css";

import { Col, Image, Row } from "react-bootstrap";

import AOS from "aos";
import React from "react";
import cv from "../../assets/svg/cv.svg";
import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import { titleConvert } from "../../utils/functions";

const name = "Francisco";
const lastName = "Rappazzini";

function MyData() {
  AOS.init();

  return (
    <section className="d-flex flex-column justify-content-center" style={{ height: "100vh" }}>
      <Row>
        <Col xs={12} lg={6} className="i" data-aos="zoom-in-up">
          <section className="d-flex">{titleConvert(lastName)}</section>

          <section className="d-flex">{titleConvert(name)}</section>

          <p className="m-0">Full Stack & Blockchain Developer</p>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex align-items-center justify-content-center mb-5"
          data-aos="zoom-in-up"
        >
          <Row>
            <Col xs={4} className="d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/francisco-rappazzini/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Image src={linkedin} className="img__redes" />
              </a>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <a
                href="https://github.com/franRappazzini"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Image src={github} className="img__redes" />
              </a>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <a
                href="https://drive.google.com/file/d/1oRL5EreKrt5P25ouy1d6TCQ4BMGBcOoX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="CV"
              >
                <Image src={cv} className="img__redes" />
              </a>
            </Col>
          </Row>
        </Col>

        <Col xs={12} data-aos="zoom-in-up">
          {/* mouse scroll icon by: https://codepen.io/2xsamurai/pen/WwmjKQ */}
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default MyData;
