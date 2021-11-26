import React, { useState, useEffect } from "react";
import axios from "axios";
import question from "../assets/ask.png";
import _ from "lodash";

let sound = new Audio();

const Theme2 = () => {
  const [songsToBePlayed, setSongsToBePlayed] = useState([]);
  const [songsNotPlayed, setSongsNotPlayed] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackAnswers, setCurrentTrackAnswers] = useState([]);
  const [showJacket, setShowJacket] = useState(false);
  const [blindTestStarted, setBlindTestStarted] = useState(false);

  const currentTrack = songsToBePlayed[currentTrackIndex];

  useEffect(() => {
    setShowJacket(false);
    if (currentTrack) {
      sound.src = currentTrack.track.preview_url;
      console.log(sound);
      sound.play();
      if (songsNotPlayed.length > 1) {
        const answers = [];
        for (let i = 0; i <= 2; i++) {
          //   let trackObject = new Object(
          //     songsNotPlayed[Math.floor(Math.random() * songsNotPlayed.length)]
          //   ).track;
          //   let trackName = new Object(trackObject).name;
          let trackName =
            songsNotPlayed[Math.floor(Math.random() * songsNotPlayed.length)]
              .track.name;
          console.log(trackName);
          answers.push(trackName);
        }
        answers.push(currentTrack.track.name);
        const shuffledAnswers = _.shuffle(answers);
        setCurrentTrackAnswers(shuffledAnswers);
      }
    }
  }, [currentTrack, songsNotPlayed]);

  function handleClick(e) {
    console.log(sound);
    sound.pause();

    e.target.id = "border";

    setTimeout(() => {
      e.target.className = "answers";
    }, 1500);

    setShowJacket(true);

    setTimeout(() => {
      setCurrentTrackIndex(currentTrackIndex + 1);
      sound.src = currentTrack.track.preview_url;
    }, 1500);
  }

  useEffect(() => {
    if (blindTestStarted)
      axios
        .get(
          "https://cors-proxy.jsrover.wilders.dev/https://api.spotify.com/v1/search?q=hit%20radio&type=playlist&market=FR&limit=1",
          {
            headers: {
              Accept: "application/json",
              ContentType: "application/json",
              Authorization:
                "Bearer BQANbOdIkwYpGIWGR9iNeEjQBjtPSnksKEQSdBE9BQ80fKkUSY6cCQncm-pmgyexASZBOMnlJY1UDQH9lQqUldVDCo4vMjFIq6FUv65hie9hN9xAmI5y1GpJCYZ60WfHVXeHLgtruYuPKA",
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
                  "Bearer BQANbOdIkwYpGIWGR9iNeEjQBjtPSnksKEQSdBE9BQ80fKkUSY6cCQncm-pmgyexASZBOMnlJY1UDQH9lQqUldVDCo4vMjFIq6FUv65hie9hN9xAmI5y1GpJCYZ60WfHVXeHLgtruYuPKA",
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
  }, [blindTestStarted]);

  if (!blindTestStarted)
    return <button onClick={() => setBlindTestStarted(true)}>PLAY</button>;

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
        {currentTrackAnswers.map((answer, index) => (
          <div
            key={answer}
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
