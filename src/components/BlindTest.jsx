import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import "./css/blind-test.css";

const BlindTest = () => {
  return (
    <div>
      <h2>Blind Test</h2>
      <p>Venez tester vos connaissances avec notre blind test musical !</p>
      <p className="choose">Choisissez votre thème</p>
      <div className="genres-container">
        <div className="genres purple">
          <Link to="/blind-test/themes/hit-du-moment">Hit du moment</Link>
        </div>
        <div className="genres pink">
          <Link to="/blind-test/themes/2000">Années 2000</Link>
        </div>
        <div className="genres red">
          <Link to="/blind-test/themes/1990">Années 90</Link>
        </div>
        <div className="genres purple">
          <Link to="/blind-test/themes/1980">Années 80</Link>
        </div>
        <div className="genres pink">
          <Link to="/blind-test/themes/rock">Rock</Link>
        </div>
        <div className="genres red">
          <Link to="/blind-test/themes/pop">Pop</Link>
        </div>
      </div>
    </div>
  );
};

export default BlindTest;
