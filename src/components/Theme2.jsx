import React, { useState, useEffect } from "react";
import axios from "axios";
import question from "../assets/ask.png";
import _ from "lodash";

const Theme2 = () => {
  const [songsToBePlayed, setSongsToBePlayed] = useState([]);
  const [songsNotPlayed, setSongsNotPlayed] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackAnswers, setCurrentTrackAnswers] = useState([]);
  const [showJacket, setShowJacket] = useState(false);

  const currentTrack = songsToBePlayed[currentTrackIndex];

  function handleClick(e) {
    // if (e.target.textContent === currentTrack.track.name)
    //   e.target.className = "border red answers";
    // else e.target.className = "border pink answers";

    e.target.className = "border";

    setTimeout(() => {
      e.target.className = "answers";
    }, 1500);
    setShowJacket(true);

    setTimeout(() => {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }, 1500);
  }

  useEffect(() => {
    setShowJacket(false);
    if (currentTrack && songsNotPlayed.length > 1) {
      // play audio
      const answers = [];

      for (let i = 0; i <= 2; i++) {
        let trackObject = new Object(
          songsNotPlayed[Math.floor(Math.random() * songsNotPlayed.length)]
        ).track;
        let trackName = new Object(trackObject).name;
        answers.push(trackName);
      }
      answers.push(currentTrack.track.name);
      setCurrentTrackAnswers(answers);
    }
  }, [currentTrack, songsNotPlayed]);

  useEffect(() => {
    axios
      .get(
        "https://cors-proxy.jsrover.wilders.dev/https://api.spotify.com/v1/search?q=hit%20radio&type=playlist&market=FR&limit=1",
        {
          headers: {
            Accept: "application/json",
            ContentType: "application/json",
            Authorization:
              "Bearer BQDAemGKwrE8JD2bI5g7kaLOqy9kaGGIYeuE1HVoD-_7zxlr7oxgmrFywl0lUPXAvni8WLcrpqQnhd_bYQOmIeRxy9X_J3JvWhyXNcDS0VpDxoAP769MjOzcq4-iZv_207kuJPF020A4KA",
          },
        }
      )
      .then((res) => {
        const playlistURL = res.data.playlists.items[0].tracks.href;
        axios
          .get(`https://cors-proxy.jsrover.wilders.dev/${playlistURL}`, {
            headers: {
              Accept: "application/json",
              ContentType: "application/json",
              Authorization:
                "Bearer BQDAemGKwrE8JD2bI5g7kaLOqy9kaGGIYeuE1HVoD-_7zxlr7oxgmrFywl0lUPXAvni8WLcrpqQnhd_bYQOmIeRxy9X_J3JvWhyXNcDS0VpDxoAP769MjOzcq4-iZv_207kuJPF020A4KA",
            },
          })
          .then((res) => {
            const shuffledPlaylist = _.shuffle(res.data.items);
            const selectedSongs = shuffledPlaylist.slice(0, 10);
            const dismissedSongs = shuffledPlaylist.slice(10, -1);
            setSongsToBePlayed(selectedSongs);
            setSongsNotPlayed(dismissedSongs);
          });
      });
  }, []);

  return (
    <div>
      <h2>Hits du moment</h2>
      <div className="image-container">
        <img
          src={showJacket ? currentTrack.track.album.images[1].url : question}
          alt=""
        />
      </div>
      <div className="answers-container">
        {currentTrackAnswers.map((answer) => (
          //   <div className="answers" onClick={handleClick}>
          <div
            className={
              showJacket
                ? answer === currentTrack.track.name
                  ? "red answers"
                  : "pink answers"
                : "answers"
            }
            onClick={handleClick}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme2;
