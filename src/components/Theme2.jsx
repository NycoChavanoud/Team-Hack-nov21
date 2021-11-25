import React, { useState, useEffect } from "react";
import axios from "axios";
import question from "../assets/ask.png";
import _ from "lodash";

const Theme2 = () => {
  const [songsToBePlayed, setSongsToBePlayed] = useState([]);
  const [songsNotPlayed, setSongsNotPlayed] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackAnswers, setCurrentTrackAnswers] = useState([]);

  const currentTrack = songsToBePlayed[currentTrackIndex];
  console.log(songsToBePlayed);

  function handleClick() {
    setTimeout(() => {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }, 1500);
  }

  useEffect(() => {
    if (currentTrack) {
      // play audio
      const answers = [];

      answers.push(currentTrack.track.name);
      setCurrentTrackAnswers(answers);
    }
  }, [currentTrack]);

  useEffect(() => {
    axios
      .get(
        "https://cors-proxy.jsrover.wilders.dev/https://api.spotify.com/v1/search?q=hit%20radio&type=playlist&market=FR&limit=1",
        {
          headers: {
            Accept: "application/json",
            ContentType: "application/json",
            Authorization:
              "Bearer BQAazILCUeQY0RVqvtM3m1pWMcFgMuiNDOgJvC5iq6zus4ezgPtbMx6meg5j-3CMySagfOhbCN06Il9AE-rGkDVIkPU3IkaaAumCWVH6q30k4tkXN-1EQx3YzTUq2wMJREsdqkkT1U1flQ",
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
                "Bearer BQAazILCUeQY0RVqvtM3m1pWMcFgMuiNDOgJvC5iq6zus4ezgPtbMx6meg5j-3CMySagfOhbCN06Il9AE-rGkDVIkPU3IkaaAumCWVH6q30k4tkXN-1EQx3YzTUq2wMJREsdqkkT1U1flQ",
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
        <img src={question} alt="" />
      </div>
      <div className="answers-container">
        {currentTrackAnswers.map((answer) => (
          <div className="answers" onClick={handleClick}>
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme2;
