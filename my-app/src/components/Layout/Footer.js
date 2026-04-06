import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer text-center">
      <h1>
        All Rights Reserved &copy; Techinfoyt
      </h1>

      <p className="mt-3">
        <Link to="/about" className="footer-link">About</Link> |{" "}
        <Link to="/contact" className="footer-link">Contact</Link> |{" "}
        <Link to="/policy" className="footer-link">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;