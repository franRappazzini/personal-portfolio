import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container d-flex justify-content-center">
      <p className="me-3">© 2021</p>
      <p className="ms-3">
        Created by{" "}
        <a href="https://github.com/franRappazzini" className="footer__link">
          Francisco Rappazzini
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
