import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Letter from "../Letter/Letter";

function FormContact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="d-flex justify-content-center" data-aos="fade-up">
        <Letter letter="C" />
        <Letter letter="o" />
        <Letter letter="n" />
        <Letter letter="t" />
        <Letter letter="a" />
        <Letter letter="c" />
        <Letter letter="t" />
      </section>

      <Form
        onSubmit={handleSubmit}
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
                placeholder="Name"
                style={{
                  backgroundColor: "#212529",
                  borderColor: "black",
                  color: "white",
                }}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="your@email.com"
                style={{
                  backgroundColor: "#212529",
                  borderColor: "black",
                  color: "white",
                }}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{
                  backgroundColor: "#212529",
                  borderColor: "black",
                  color: "white",
                }}
                required
              />
            </Form.Group>
            <Button className="btn btn-outline-light" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormContact;
