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
      <div className="navbar-right">
        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/77468756?v=4"
          onClick={handleClick}
          style={{ cursor: "pointer" }} // Muda o cursor para pointer para indicar que é clicável
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
