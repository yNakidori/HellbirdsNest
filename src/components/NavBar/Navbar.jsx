// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Função para abrir o menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Função para fechar o menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <ul>
          <li>Home</li>
          <li>Systems</li>
          <li>Web Pages</li>
          <li>Games</li>
          <li>About me</li>
          <li>Other projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
