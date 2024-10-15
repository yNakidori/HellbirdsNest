import React from "react";
import {
  Home,
  Web,
  Computer,
  Lightbulb,
  ContactMail,
  SportsEsports,
} from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="#home">
            <Home /> Home
          </a>
        </li>
        <li>
          <a href="#web-pages">
            <Web /> Web Pages
          </a>
        </li>
        <li>
          <a href="#systems">
            <Computer /> Systems
          </a>
        </li>
        <li>
          <a href="#side-projects">
            <Lightbulb /> Side Projects
          </a>
        </li>
        <li>
          <a href="#games">
            <SportsEsports /> Games
          </a>
        </li>
        <li>
          <a href="#contact">
            <ContactMail /> Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
