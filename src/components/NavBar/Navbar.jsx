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
          <Home /> Home
        </li>
        <li>
          <Web /> Web Pages
        </li>
        <li>
          <Computer /> Systems
        </li>
        <li>
          <Lightbulb /> Side Projects
        </li>
        <li>
          <SportsEsports /> Games
        </li>
        <li>
          <ContactMail /> Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
