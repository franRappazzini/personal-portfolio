import "./CustomToast.css";

import { Toast, ToastContainer } from "react-bootstrap";

import React from "react";

function CustomToast({ toast, setToast }) {
  const toggleShow = () => setToast({ ...toast, error: false, ok: false });

  return (
    <ToastContainer
      position="top-center"
      className={`bg-${
        toast.ok ? "success" : toast.error ? "danger" : "bg-dark"
      } my-4 toast_container rounded position-fixed`}
    >
      <Toast
        show={toast.ok || toast.error}
        onClose={toggleShow}
        className={`bg-${toast.ok ? "success" : toast.error ? "danger" : "bg-dark"} rounded`}
        delay={6000}
        autohide
        animation={false}
      >
        <Toast.Header
          closeButton={false}
          className={`bg-${toast.ok ? "success" : toast.error ? "danger" : "bg-dark"}`}
        >
          <strong className="me-auto toast_title">
            {toast.ok ? "Email sent successfully!" : "Error sending email"}
          </strong>
        </Toast.Header>
        <Toast.Body
          className={`bg-${toast.ok ? "success" : toast.error ? "danger" : "bg-dark"} toast_text`}
        >
          {toast.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CustomToast;
