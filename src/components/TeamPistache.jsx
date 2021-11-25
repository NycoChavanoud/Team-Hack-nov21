import React from "react";

const TeamPistache = () => {
  return (
    <div>
      <h2>TEAM PISTACHE</h2>
      <div className="score-container">
        <p>Score équipe Cacahuète</p>
        <span className="scores">12 points</span>
      </div>
      <div className="score-container">
        <p>Score équipe Pistache</p>
        <span className="scores">9 points</span>
      </div>
      <div className="blind-test-img"></div>
    </div>
  );
};

export default TeamPistache;
