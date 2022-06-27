import React from "react";
import headerimage from "../images/troll-face.png"
export default function Header(props) {
  return (
    <div>
      <header className="header">
      <nav class="navbar">
          <img className="header--image" alt="trollfaceimage" src={headerimage} /> 
          <h2 className="header--title">Meme-Generator</h2> 
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  onClick={props.toogleMode}/>
                <label class="form-check-label" for="flexSwitchCheckChecked">Dark mode</label>
          </div>
        </nav>
      </header>
    </div>
  );
}