import React from "react";
import "./css/KaraokeList.css";
import MusicList from "./MusicList";

const itemsMusics = [
  {
    cat: "chanson française",
    songName: "Je m'en vais",
    artist: "Vianney",
    linkKaraoke: "https://youtu.be/YCNluZc0pt0",
    jacket:
      "https://img.discogs.com/IawCQVxcc_wDTmTaIIG_VM9lPKQ=/fit-in/600x530/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10727422-1503534399-9468.jpeg.jpg",
  },
  {
    cat: "international",
    songName: "When I was your man",
    artist: "Bruno Mars",
    linkKaraoke: "https://youtu.be/56b92SfmzU8",
    jacket:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/7b/25/54/5514619/1540-1/tsp20131024110350/Unorthodox-jukebox-Edition-collector-inclus-5-titres-bonus.jpg",
  },
];

const KaraokeList = () => {
  return (
    <div>
      <h1>Faites votre choix !</h1>
      <div className="container-karaoke">
        <MusicList itemsMusics={itemsMusics} />
      </div>
    </div>
  );
};

export default KaraokeList;
