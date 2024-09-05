import React from "react";
import {
  Home,
  Info,
  Build,
  TrendingUp,
  ContactMail,
  List,
} from "@mui/icons-material"; // Exemplos de ícones
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <Home /> Home
        </li>
        <li>
          <Info /> About
        </li>
        <li>
          <Build /> Skills
        </li>
        <li>
          <TrendingUp /> Projects
        </li>
        <li>
          <List /> Blogs
        </li>
        <li>
          <ContactMail /> Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
