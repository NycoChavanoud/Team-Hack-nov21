import React, { useState } from "react";
import "./css/MusicItem.css";

import ReactPlayer from "react-player";

const MusicItems = ({ songName, artist, linkKaraoke, jacket }) => {
  // const [isFavorite, setIsFavorite] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);

  // function handleClickfavorite() {
  //   setIsFavorite(!isFavorite);
  // }

  return (
    <div className="item-karaoke">
      <div className="jacket-module">
        <img
          id="jacket"
          src={jacket}
          alt="jacket"
          onClick={() => setDisplayPopup(!displayPopup)}
        />
        <h3 id="song-name">{songName}</h3>
        <div id="artist-name">{artist}</div>
      </div>
      <div
        className="overlay"
        style={{ display: displayPopup ? "block" : "none" }}
      >
        <div
          className="video-module"
          style={{ display: displayPopup ? "block" : "none" }}
        >
          <button onClick={() => setDisplayPopup(false)}>X</button>
          <ReactPlayer url={linkKaraoke} controls={true} />
        </div>
      </div>
      {/* <div id="favorite" onClick={handleClickfavorite}>
        <div className={isFavorite ? "isFavorite" : "notFavorite"} alt="" />
      </div> */}
    </div>
  );
};

export default MusicItems;
