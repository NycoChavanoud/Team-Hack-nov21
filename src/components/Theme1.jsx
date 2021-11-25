import React, { useState, useEffect } from "react";
import axios from "axios";
import question from "../assets/ask.png";
import "./css/blind-test.css";

const Theme1 = ({ url }) => {
  const [playlist, setPlaylist] = useState(null);
  // const [playing, setPlaying] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://cors-proxy.jsrover.wilders.dev/https://api.spotify.com/v1/search?q=hit%20radio&type=playlist&market=FR&limit=1",
        {
          headers: {
            Accept: "application/json",
            ContentType: "application/json",
            Authorization:
              "Bearer BQAOZHZH6Cdos7HL6OZiK0YO8WQrTk-D5EiQSoliTCQ4FaXl_E4fmqivzffRlf0rixT-O_74pvQ7Ob30XUzBjLccTUCZKhUBGq70cV5gM7oxZYZ4mPw1SwosN5YgmXxNjJ_u0mCKsfxm_w",
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
                "Bearer BQAOZHZH6Cdos7HL6OZiK0YO8WQrTk-D5EiQSoliTCQ4FaXl_E4fmqivzffRlf0rixT-O_74pvQ7Ob30XUzBjLccTUCZKhUBGq70cV5gM7oxZYZ4mPw1SwosN5YgmXxNjJ_u0mCKsfxm_w",
            },
          })
          .then((res) => setPlaylist(res.data.items));
      });
  }, []);

  const allTracks = [];
  const songs = [];
  let answers = [];
  let currentSound = "";
  let currentTitle = "";
  let wrongTitle1 = "";
  let wrongTitle2 = "";
  let wrongTitle3 = "";

  if (playlist !== null) {
    playlist.map((elem) => allTracks.push(elem.track.name));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= playlist.length; i++) {
      const randomNb = Math.floor(Math.random() * playlist.length);
      if (!songs.includes(randomNb)) songs.push(randomNb);
      if (songs.length === 10) break;
    }
    for (let i = 0; i <= songs.length; i++) {
      currentSound = playlist[songs[0]].track.preview_url;
      currentTitle = playlist[songs[0]].track.name;
      wrongTitle1 = allTracks[Math.floor(Math.random() * allTracks.length)];
      wrongTitle2 = allTracks[Math.floor(Math.random() * allTracks.length)];
      wrongTitle3 = allTracks[Math.floor(Math.random() * allTracks.length)];
    }
  }

  const audio = new Audio(currentSound);

  useEffect(() => {
    answers.push(currentTitle, wrongTitle1, wrongTitle2, wrongTitle3);
    console.log(answers);
  }, [nextQuestion]);

  return (
    <div>
      <h2>Hits du moment</h2>
      <div className="image-container">
        <img src={question} alt="" />
      </div>
      <div className="answers-container">
        <div className="answers" onClick={() => setNextQuestion(!nextQuestion)}>
          {answers[3]}
        </div>
        <div className="answers" onClick={() => setNextQuestion(!nextQuestion)}>
          {answers[0]}
        </div>
        <div className="answers" onClick={() => setNextQuestion(!nextQuestion)}>
          {answers[1]}
        </div>
        <div className="answers" onClick={() => setNextQuestion(!nextQuestion)}>
          {answers[2]}
        </div>
      </div>
      {/* <div
        className="overlay"
        style={{ display: displayOverlay ? "block" : "none" }}
      >
        <div
          className="vote"
          style={{ display: displayOverlay ? "block" : "none" }}
        ></div>
      </div> */}
    </div>
  );
};

export default Theme1;
