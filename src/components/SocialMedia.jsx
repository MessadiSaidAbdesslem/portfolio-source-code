import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/MessadiSaidAbdesslem" className="app__flex">
        <div>
          <AiFillGithub />
        </div>
      </a>

      <a
        href="https://www.facebook.com/SaidAbdesslemMessadi"
        className="app__flex"
      >
        <div>
          <FaFacebook />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/said-abdeslem-messadi-bab536178/"
        className="app__flex"
      >
        <div>
          <AiFillLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
