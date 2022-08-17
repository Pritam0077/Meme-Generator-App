import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import MemeGrid from "./MemeGrid";

const MEMES_GRID_LENGTH = 12;

export default function Meme() {
  // this fetches all the memes from api
  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  // getting random memes from all memes and showing it on webpage meme grid
  const [memes, setMemes] = useState([]);
  const [showMemeGrid, setShowMemeGrid] = useState(false);
  function getMemeImages() {
    // copied algo from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array

    let n = MEMES_GRID_LENGTH;
    let randomMemes = new Array(n),
      len = allMemes.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      randomMemes[n] = allMemes[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    setMemes(randomMemes);
    setShowMemeGrid(true);
  }

  // selecting particular meme
  const [selectedMeme, setselectedMeme] = useState({
    // topText: "",
    // bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    name: "meme",
  });

  const handleSelectMeme = (meme) => {
    setselectedMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: meme.url,
      name: meme.name,
    }));

    setShowMemeGrid(false);
  };

  // handles text
  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  function downloadImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    let saveurl = allMemes[randomNumber].url;
    setselectedMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: saveurl,
    }));
    saveMeme();
  }

  function saveMeme() {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = selectedMeme.randomImage;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0);
      context.fillStyle = "white";
      context.font = "30px sans-serif";
      context.textAlign = "center";
      context.fillText(selectedMeme.topText, canvas.width / 2, 40);
      context.fillText(
        selectedMeme.bottomText,
        canvas.width / 2,
        canvas.height - 20
      );

      const fileName = selectedMeme.name + ".png";
      saveAs(canvas.toDataURL("image/png"), fileName);
    };
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
            value={selectedMeme.topText}
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
            value={selectedMeme.bottomText}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="centerbuttons">
        <div className="buttons">
          <button className="form--button" onClick={getMemeImages}>
            Get new meme images 🖼
          </button>
        </div>

        <div className="buttons">
          <button
            type="button "
            className="form--button"
            onClick={downloadImage}
          >
            Download-Created meme{" "}
          </button>
        </div>
      </div>
      {showMemeGrid ? (
        <MemeGrid
          memes={memes}
          handleSelectMeme={handleSelectMeme}
          text={text}
        />
      ) : (
        <div className="meme">
          <img
            src={selectedMeme.randomImage}
            className="meme--image"
            alt="meme"
          />
          <h2 className="meme--text top">{text.topText}</h2>
          <h2 className="meme--text bottom">{text.bottomText}</h2>
        </div>
      )}
    </div>
  );
}
