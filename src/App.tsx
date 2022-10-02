import { useState } from "react";
import Header from "components/Header";
import Memes from "components/Memes";
import Footer from "components/Footer";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#000000";
      document.getElementById("bg")!.style.backgroundColor = "#000000";
      document.title = "Meme-Generator - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.getElementById("bg")!.style.backgroundColor = "#fff";
      document.title = "Meme-Generator - Light Mode";
    }
  };

  return (
    <div>
      <Header title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Memes />
      <Footer />
    </div>
  );
};

export default App;
