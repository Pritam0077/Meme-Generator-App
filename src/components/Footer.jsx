import React from "react";
import "../styles.css";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="container-fluid footer mt-5 wow fadeIn border-pin"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <h1 className="fw-bold text-primary mb-4">
              Meme<span className="modeStyle">-Gene</span>rator
            </h1>
            <p className="modeStyle">
              Create customized memes using gallery of meme templates.
            </p>
            <div className="d-flex ">
              <a
                className="icon-size"
                href="https://twitter.com/Pritam_0077"
                target="blank"
              >
                <FaTwitter></FaTwitter>
              </a>
              <a
                className="icon-size"
                href="https://discord.com/channels/@Pritam7984"
                target="blank"
              >
                <FaDiscord />
              </a>
              <a
                className="icon-size"
                href="https://github.com/Pritam0077"
                target="blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright footer-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="modeStyle text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Made with 💓 by Pritam Panda © 2022</a> |
              Follow and give a 🌟 if you liked it
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
