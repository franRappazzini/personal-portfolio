import "./MyData.css";
import "aos/dist/aos.css";

import { Col, Image, Row } from "react-bootstrap";

import AOS from "aos";
import Letter from "../Letter/Letter";
import React from "react";
import cv from "../../assets/svg/cv.svg";
import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";

function MyData() {
  AOS.init();

  return (
    <section
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col xs={12} md={6} className="i" data-aos="zoom-in-up">
          <section className="d-flex">
            <Letter letter="R" />
            <Letter letter="a" />
            <Letter letter="p" />
            <Letter letter="p" />
            <Letter letter="a" />
            <Letter letter="z" />
            <Letter letter="z" />
            <Letter letter="i" />
            <Letter letter="n" />
            <Letter letter="i" />
          </section>

          <section className="d-flex">
            <Letter letter="F" />
            <Letter letter="r" />
            <Letter letter="a" />
            <Letter letter="n" />
            <Letter letter="c" />
            <Letter letter="i" />
            <Letter letter="s" />
            <Letter letter="c" />
            <Letter letter="o" />
          </section>

          <p className="m-0">Full Stack Developer</p>
        </Col>
        <Col
          xs={12}
          md={6}
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
                href="https://www.dropbox.com/s/oh8yt9iindeiqqa/Rappazzini%20Francisco%20-%20CV.pdf?dl=0"
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
