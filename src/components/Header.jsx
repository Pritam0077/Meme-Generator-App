import React from "react";
import headerimage from "../images/troll-face.png";
export default function Header(props) {
  return (
    <>
    <div
      class="container-fluid fixed-top px-0 wow fadeIn mt-20 header-top"
      data-wow-delay="0.1s"
    >
      <nav
        class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" class="navbar-brand ms-4 ms-lg-0 mt-20">
          <h1 class="fw-bold text-primary m-0">
            <img
              className="header--image"
              alt="trollfaceimage"
              src={headerimage}
            />
            Meme<span className="modeStyle">-Gene</span>rator
          </h1>
        </a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toogleMode}
              />
              <label
                class="form-check-label modeStyle"
                for="flexSwitchCheckChecked"
              >
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
