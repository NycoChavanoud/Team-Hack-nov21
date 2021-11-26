import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./css/blind-test.css";

const TeamCacahuete = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  // const encodedClientId = base64_encode(
  //   process.env.REACT_APP_SPOTIFY_CLIENT_ID
  // );
  // const encodedClientSecret = base64_encode(
  //   process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
  // );

  // useEffect(() => {
  //   axios
  //     .post("https://accounts.spotify.com/api/token", {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Authorization: `Basic ${encodedClientId}:${encodedClientSecret}`,
  //       },
  //       data: "grant_type=client_credientials",
  //     })
  //     .then((tokenResponse) => {
  //       console.log(tokenResponse.data);
  //     });
  // }, []);

  return (
    <div>
      <h2>TEAM CACAHUÈTE</h2>
      <div className="scores-container">
        <div className="team-score-1">
          <p>Score team</p>
          <p>CACAHUÈTE</p>
          <span className="scores">12 points</span>
        </div>
        <div className="team-score-2">
          <p>Score team</p>
          <p>PISTACHE</p>
          <span className="scores">9 points</span>
        </div>
      </div>
      <div className="blind-test-img"></div>
      <div className="answers-container">
        <div className="answer" onClick={() => setDisplayPopup(!displayPopup)}>
          ANSWER ONE
        </div>
        <div className="answer">ANSWER TWO</div>
        <div className="answer">ANSWER THREE</div>
        <div className="answer">ANSWER FOUR</div>
      </div>

      <div
        className="overlay"
        style={{ display: displayPopup ? "block" : "none" }}
      >
        <div
          className="vote"
          style={{ display: displayPopup ? "block" : "none" }}
        >
          <button>YES</button>
          <button onClick={() => setDisplayPopup(false)}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default TeamCacahuete;
