import React from "react";

function MemeGrid({ memes, handleSelectMeme }) {
  return (
    <div className="meme--grid">
      {memes.map((meme) => (
        <div
          onClick={() => handleSelectMeme(meme)}
          key={meme.id}
          className="meme--grid-item"
        >
          <img src={meme.url} alt="meme" />
        </div>
      ))}
    </div>
  );
}

export default MemeGrid;
