import React from "react";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-basic" id="bg">
        <footer>
          <div className="social">
            <a href="https://twitter.com/Pritam_0077" target="blank">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://discord.com/channels/@Pritam7984" target="blank">
              <FaDiscord />
            </a>
            <a href="https://github.com/Pritam0077" target="blank">
              <FaGithub />
            </a>
          </div>
          <p className="copyright">Made with 💓 by Pritam Panda © 2022</p>
          <p className="copyright">Follow and give a 🌟if you liked it</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
