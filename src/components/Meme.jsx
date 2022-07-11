import React, { useState, useEffect } from "react";
import { saveAs } from 'file-saver'
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    name : "meme"
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    const name = allMemes[randomNumber].name;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      name : name
    }));
  }

  function downloadImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    let saveurl=allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: saveurl,
    }));
    saveMeme();
  }

  function saveMeme() {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = meme.randomImage;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0);
      context.fillStyle = "white";
      context.font = "30px sans-serif";
      context.textAlign = "center";
      context.fillText(meme.topText, canvas.width/2, 40);
      context.fillText(meme.bottomText, canvas.width/2, canvas.height - 20);

      const fileName = meme.name+".png";
      saveAs(canvas.toDataURL("image/png"), fileName);
    }
  }

  return (
    <div>
      <div className="form">
        <div>
          <input
            className="form--input"
            type="text"
            size="70"
            placeholder="shut up"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />

        </div>
        
        <div>
          <input
            className="form--input"
            type="text"
            size="70"
            placeholder="and take my money"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        
      </div>
        <div className="centerbuttons">
          <div className="buttons">
            <button className="form--button" onClick={getMemeImage}  >
              Get a new meme image 🖼
            </button>
          </div>
         
        <div className="buttons">
            <button type="button " className="form--button" onClick={downloadImage}>Download-Created meme </button>
          </div>
          
        </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>

  );
}
