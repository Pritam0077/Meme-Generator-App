import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#000000";
      document.getElementById("bg").style.backgroundColor = "#000000";
      document.title = "Meme-Generator - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.getElementById("bg").style.backgroundColor = "#fff";
      document.title = "Meme-Generator - Light Mode";
    }
  };
  return (
    <div className="app-container">
      <Header title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <Meme />
      <Footer />
    </div>
  );
}
export default App;
