import React from "react";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div class="footer-basic" id="bg">
        <footer>
          <div class="social">
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
          <p class="copyright">Made with 💓 © 2022</p>
          <p class="copyright">Follow and give a 🌟if you liked it</p>
        </footer>
      </div>
     </div>
  );
}

export default Footer;
