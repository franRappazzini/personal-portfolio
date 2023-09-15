import "./FormContact.css";

import { Col, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

import Button from "@restart/ui/esm/Button";
import CustomToast from "../CustomToast/CustomToast";
import { send } from "@emailjs/browser";
import { titleConvert } from "../../utils/functions";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;
const title = "Contact";

function FormContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", loading: false });
  const [toast, setToast] = useState({ error: false, ok: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return setToast({
        ...toast,
        error: true,
        message:
          "You must complete all the fields, if you have done so please contact me by another means. Thank you!",
      });

    setForm({ ...form, loading: true });

    try {
      const res = await send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form,
        REACT_APP_PUBLIC_KEY
      );

      console.log({ res });

      if (res?.status !== 200) throw new Error(res.text);

      setToast({
        ...toast,
        ok: true,
        message: "Thank you for contacting me, I will respond to you soon!",
      });
      setForm({ name: "", email: "", message: "", loading: false });
    } catch (err) {
      console.log("send email error:", err);
      setToast({
        ...toast,
        error: true,
        message: "An unexpected error has occurred, please contact me by another means. Thank you!",
      });
      setForm({ ...form, loading: false });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section
      className="d-flex flex-column justify-content-center position-relative"
      style={{ height: "100vh" }}
    >
      <section className="d-flex justify-content-center" data-aos="fade-up">
        {titleConvert(title)}
      </section>

      <Form className="mb-3" data-aos="fade-up" onSubmit={handleSubmit}>
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
                value={form.name}
                onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                className="form__control"
                required
                value={form.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="btn btn-outline-light btn__submit"
              type="submit"
              disabled={form.loading}
            >
              {form.loading ? "Sending..." : "Send"}
            </Button>
          </Col>
        </Row>
      </Form>

      <CustomToast toast={toast} setToast={setToast} />
    </section>
  );
}

export default FormContact;
