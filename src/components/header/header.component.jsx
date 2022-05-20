import React from "react";
import { Link } from "react-router-dom";
// styles
import "./header.styles.css";
// assets
import Resume from "../../assets/resume.pdf";
import MyImage from "../../assets/me.png";
// components
import HeaderSocials from "../header-socials/header-socials.component";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Mert Buyulu</h1>
        <h5 className="text-light">
          Passionate Learner & Future Software Developer
        </h5>

        <div className="cta">
          <a href={Resume} className="btn" download>
            Download Resume
          </a>
          <Link to="/contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>

        <HeaderSocials />

        <div className="me">
          <img src={MyImage} alt="myself" />
        </div>

        <Link to="/contact" className="scroll_down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
