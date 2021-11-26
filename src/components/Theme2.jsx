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
  // const [play, setPlay] = useState(false);

  const currentTrack = songsToBePlayed[currentTrackIndex];
  let sound = "";
  if (currentTrack) sound = new Audio(currentTrack.track.preview_url);

  //   useEffect(() => {
  //     if (currentTrack) sound.play();
  //   }, []);

  useEffect(() => {
    setShowJacket(false);
    if (currentTrack) {
      console.log(sound);
      sound.play();
      //   sound.pause();
      if (songsNotPlayed.length > 1) {
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
    }
  }, [currentTrack, songsNotPlayed]);

  function handleClick(e) {
    e.target.id = "border";

    setTimeout(() => {
      e.target.className = "answers";
    }, 1500);
    setShowJacket(true);

    setTimeout(() => {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }, 1500);

    console.log(sound);
    sound.pause();
  }

  useEffect(() => {
    axios
      .get(
        "https://cors-proxy.jsrover.wilders.dev/https://api.spotify.com/v1/search?q=hit%20radio&type=playlist&market=FR&limit=1",
        {
          headers: {
            Accept: "application/json",
            ContentType: "application/json",
            Authorization:
              "Bearer BQAZTCpqVCB-jgaI4jYeBHuUh0RS3B4845PpF4msinCVIFWhpfsIEFuu9ufe8zmShzpNNpGwrqqRfjrMLFo7pjiRoQnekDLKrSXQieRwET0Ip9IMnlu07llZb3EtxRO1icAeQ4j5Z8WeSw",
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
                "Bearer BQAZTCpqVCB-jgaI4jYeBHuUh0RS3B4845PpF4msinCVIFWhpfsIEFuu9ufe8zmShzpNNpGwrqqRfjrMLFo7pjiRoQnekDLKrSXQieRwET0Ip9IMnlu07llZb3EtxRO1icAeQ4j5Z8WeSw",
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
