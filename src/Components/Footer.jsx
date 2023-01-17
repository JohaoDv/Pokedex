import React from "react";
import "./styles/Footer.css";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-div">
      <p>Pokedex built with ReactJs/Made with ❤️ by Johao Ovalle </p>
      <a className="link" href="https://github.com/JohaoDv" target="_blank">
        <AiFillGithub className="git" />
      </a>
    </div>
  );
};

export default Footer;
