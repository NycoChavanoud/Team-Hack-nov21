import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import "./css/blind-test.css";

const BlindTest = () => {
  return (
    <div>
      <h2>TITRE</h2>
      <p>
        Texte de présa - dolor sit amet, consectetur adipisicing elit. Error
        minus autem odio omnis aut recusandae magnam atque, assumenda deleniti
        eius.
      </p>
      <p>Choisissez votre thème</p>
      <div className="genres-container">
        <div className="genres">
          <Link to="/blind-test/themes/hit-du-moment">Hit du moment</Link>
        </div>
        <div className="genres">
          <Link to="/blind-test/themes/2000">Années 2000</Link>
        </div>
        <div className="genres">
          <Link to="/blind-test/themes/1990">Années 90</Link>
        </div>
        <div className="genres">
          <Link to="/blind-test/themes/1980">Années 80</Link>
        </div>
        <div className="genres">
          <Link to="/blind-test/themes/rock">Rock</Link>
        </div>
        <div className="genres">
          <Link to="/blind-test/themes/pop">Pop</Link>
        </div>
      </div>
    </div>
  );
};

export default BlindTest;
