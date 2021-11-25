import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/note.png";
import micro from "../assets/micro.png";
import play from "../assets/play.png";
import cd from "../assets/cd.png";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <a href="home" className="home">
            <img className="" src={home} alt="home" />
          </a>
          Home
        </NavLink>
        <NavLink to="/karaoke" className="">
          <a href="karaoke" className="">
            <img className="micro" src={micro} alt="micro" />
          </a>
          Karaoké
        </NavLink>
        <NavLink to="/playlist" className="">
          <a href="playlist" className="playlist">
            <img className="play" src={play} alt="playlist" />
          </a>
          Playlist
        </NavLink>
        <NavLink to="/blind-test" className="">
          <a href="blind-test" className="blind-test">
            <img className="blind-test" src={cd} alt="blind-test" />
          </a>
          Blind Test
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
