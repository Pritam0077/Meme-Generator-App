import React from "react";

function MemeGrid({ memes, handleSelectMeme, text }) {
  return (
    <div className="meme--grid">
      {memes.map((meme) => (
        <div
          onClick={() => handleSelectMeme(meme)}
          key={meme.id}
          className="meme--grid-item-container"
        >
          <div
            className="meme--grid-item"
            style={{
              backgroundImage: `url(${meme.url})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="meme--grid-item--text">{text.topText}</h2>

            <h2 className="meme--grid-item--text">{text.bottomText}</h2>
          </div>
          {/* <img src={meme.url} alt="meme" /> */}
        </div>
      ))}
    </div>
  );
}

export default MemeGrid;
