import React from "react";
// styles
import "./header-socials.styles.css";
// icons
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/mert-buyulu"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/MertBuyulu" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/mert_buyulu15"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
