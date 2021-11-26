import React, { useState } from "react";
import "./css/PlayList.css";
import player from "../assets/player.png";
import jacketone from "../assets/jacket1.jpg";
import jackettwo from "../assets/HACKER.jpg";
import jackethree from "../assets/bowie.jpeg";

const PlayList = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const [count2, setCount2] = useState(0);
  const increment2 = () => setCount2(count2 + 1);
  const [count3, setCount3] = useState(0);
  const increment3 = () => setCount3(count3 + 1);

  return (
    <div id="playlist-container">
      <h1 id="title-playlist-page">Playlist</h1>
      <div className="player-container">
        <input id="search-song" type="text" placeholder="rechercher" />
        <img src={player} id="photo-player" alt="lecteur-audio" />
      </div>
      <h2 className="vote-title">Votez pour le prochain son !</h2>
      <div className="vote-container">
        <div className="count-container">
          <p id="counter-vote">{count}</p>
          <button onClick={increment}>
            <img id="img-song-vote" src={jacketone} alt="Unaverage-gang" />
          </button>
          <div id="title-song-vote"> Chernobyl</div>
          <div id="artist-song-vote">Unaverage Gang</div>
        </div>
        <div className="count-container">
          <p id="counter-vote">{count2}</p>
          <button onClick={increment2}>
            <img id="img-song-vote" src={jackettwo} alt="hacker" />
          </button>
          <div id="title-song-vote">Hacker</div>
          <div id="artist-song-vote">OmenXIII</div>
        </div>
        <div className="count-container">
          <p id="counter-vote">{count3}</p>
          <button onClick={increment3}>
            <img id="img-song-vote" src={jackethree} alt="bowie" />{" "}
          </button>
          <div id="title-song-vote">The Jean Genie</div>
          <div id="artist-song-vote">David Bowie</div>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
