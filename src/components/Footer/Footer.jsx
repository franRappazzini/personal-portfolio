import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer className="container d-flex justify-content-center">
      <p className="me-3">© {new Date().getFullYear()}</p>
      <p className="ms-3">
        Created by{" "}
        <a
          href="https://github.com/franRappazzini"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          Francisco Rappazzini
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
