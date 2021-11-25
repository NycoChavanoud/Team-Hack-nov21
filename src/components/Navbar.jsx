import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/note.png";
import micro from "../assets/micro.png";
import play from "../assets/play.png";
import cd from "../assets/cd.png";

const Navbar = () => {
  return (
    <section className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-4 py-12">
      <nav className="bg-indigo-900">
        <div className="flex justify-around items-center">
          <div className="flex-shrink-0">
            <ul className="flex justify-around items-center">
              <NavLink to="/" className="item w-12 h-12">
                <a href="home" className="home">
                  <img className="" src={home} alt="home" />
                </a>
                Home
              </NavLink>
              <NavLink to="/karaoke" className="item w-12 h-12">
                <a href="karaoke" className="karaoke">
                  <img className="micro" src={micro} alt="micro" />
                </a>
                Karaoké
              </NavLink>
              <NavLink to="/playlist" className="item w-12 h-12">
                <a href="playlist" className="playlist">
                  <img className="play" src={play} alt="playlist" />
                </a>
                Playlist
              </NavLink>
              <NavLink to="/blind-test" className="item w-12 h-12">
                <a href="blind-test" className="blind-test">
                  <img className="blind-test" src={cd} alt="blind-test" />
                </a>
                Blind Test
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
