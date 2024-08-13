import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import Avatar from "../assets/avatar.png";
const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="menu-icon">
            <CgMenuMotion size={32} style = {{ rotate: "270deg" }} />
        </div>
        <h1 className="logo">Dexpress</h1>
      </div>

      <nav className="navbar">
        <ul className="nav_list">
          <li className="nav_item">
            <span className="nav_link">About us</span>
          </li>
          <li className="nav_item">
            <span className="nav_link">Decks</span>
          </li>
          <li className="nav__item">
            <span className="nav_link">Wheels</span>
          </li>
          <li className="nav__item">
            <span className="nav_link">Contact</span>
          </li>
          <li className="nav__item">
            <img src={Avatar} alt="avatar" className="avatar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
