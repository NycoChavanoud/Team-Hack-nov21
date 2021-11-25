import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/karaoke-list">Karaoké</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/blind-test">Blind Test</Link>
    </div>
  );
};

export default Navbar;
