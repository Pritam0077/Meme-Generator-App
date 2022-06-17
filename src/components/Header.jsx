import React from "react";
import headerimage from "../images/troll-face.png"

export default function Header() {
  return (
    <div>
      <header className="header">
      <nav class="navbar">
          <img className="header--image" alt="trollfaceimage" src={headerimage} /> 
          <h2 className="header--title">Meme-Generator</h2> 
        </nav>
      </header>
    </div>
  );
}
