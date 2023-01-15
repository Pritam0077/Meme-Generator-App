import React from "react";
import headerimage from "../images/troll-face.png"
export default function Header(props) {
  return (
    <div>
      <header className="header">
      <nav className="navbar">
          <img className="header--image" alt="trollfaceimage" src={headerimage} /> 
          <h2 className="header--title">Meme-Generator</h2> 
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  onClick={props.toogleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark mode</label>
          </div>
        </nav>
      </header>
    </div>
  );
}