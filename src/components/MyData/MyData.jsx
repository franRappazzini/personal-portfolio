import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Letter from "../Letter/Letter";
import "./MyData.css";
import AOS from "aos";
import "aos/dist/aos.css";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import cv from "../../assets/img/cv.svg";

function MyDates() {
  AOS.init();

  return (
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

        <p className="m-0">FrontEnd Developer</p>
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
              href="https://drive.google.com/file/d/1GX4iq0pK2riRnCKBVxpKE-OUTmTaUSJ-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              title="CV"
            >
              <Image src={cv} className="img__redes" />
            </a>
          </Col>
        </Row>
      </Col>

      <Col xs={12}>
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default MyDates;
