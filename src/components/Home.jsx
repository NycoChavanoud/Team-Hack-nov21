import React from "react";
import "./css/Home.css";
import logo from "../assets/logo.png";
import provisoire from "../assets/headphones.png";

function Home() {
  return (
    <>
      <img id="logo-homepage" src={logo} alt="Logo" />
      <div className="container-home-page">
        <h1 id="title-home-page">Saturday Night App'</h1>
        <p id="baseline-home-page"> Dansez, chantez, jouez...</p>
        <img src={provisoire} id="photo-home-page" alt="fete" />
        <p id="presentation-home-page">
          Saturday night app met de la musique dans vos soirées!
        </p>
      </div>
    </>
  );
}

export default Home;
