import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <Link to="/" className="footer-logo">
          conduit
        </Link>
        <p>
          An interactive learning project from{" "}
          <a href="https://thinkster.io/">Thinkster</a>. Code & design licensed
          under MIT.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
