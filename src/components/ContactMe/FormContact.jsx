import "./FormContact.css";

import { Col, Form, Row } from "react-bootstrap";

import Button from "@restart/ui/esm/Button";
import React from "react";
import { titleConvert } from "../../utils/functions";

const title = "Contact";

function FormContact() {
  return (
    <section className="d-flex flex-column justify-content-center" style={{ height: "100vh" }}>
      <section className="d-flex justify-content-center" data-aos="fade-up">
        {titleConvert(title)}
      </section>

      <Form
        action="https://formsubmit.co/fran_rappa@outlook.com"
        method="POST"
        className="mb-3"
        data-aos="fade-up"
      >
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                className="form__control"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="your@email.com"
                className="form__control"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="textarea"
                rows={3}
                className="form__control"
                required
              />
            </Form.Group>
            <Button className="btn btn-outline-light btn__submit" type="submit">
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
}

export default FormContact;
