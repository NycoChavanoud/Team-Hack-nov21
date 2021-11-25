import React from "react";
import MusicItems from "./MusicItems";

const MusicList = ({ itemsMusics }) => {
  console.log(itemsMusics);
  return (
    <div>
      {itemsMusics.map((item, index) => (
        <MusicItems
          key={item.index}
          songName={item.songName}
          jacket={item.jacket}
          linkKaraoke={item.linkKaraoke}
          artist={item.artist}
          isFavorite={false}
        />
      ))}
    </div>
  );
};

export default MusicList;
