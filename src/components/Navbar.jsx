import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import home from "../assets/note.png";
import micro from "../assets/micro.png";
import play from "../assets/play.png";
import cd from "../assets/cd.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/">
        <img className="logo-home" src={home} alt="home" />
      </NavLink>

      <NavLink to="/karaoke-list">
        <img className="logo-karaoke" src={micro} alt="logo-micro" />
      </NavLink>

      <NavLink to="/playlist">
        <img className="logo-playlist" src={play} alt="playlist" />
      </NavLink>

      <NavLink to="/blind-test">
        <img className="logo-blind-test" src={cd} alt="blind-test" />
      </NavLink>
    </div>
  );
};

export default Navbar;
