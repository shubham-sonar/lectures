import React from "react";
import { NavLink } from "react-router-dom";
const ulStyle = {
  display: "flex",
  color: "white",
  backgroundColor: "grey",
  justifyContent: "space-around",
  flexDirection: "row",
  alignItems: "center",
  width: "auto",
  height: "30px",
  padding: "5px"
};
const navStyle = {
  color: "black",
  textDecoration: "none",
  margin: "10px"
};

const NavBar = () => {
  return (
    <div style={ulStyle}>
      <div>
        <NavLink to="home" style={navStyle}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="about" style={navStyle}>
          About
        </NavLink>
      </div>
      <div>
        <NavLink to="contact" style={navStyle}>
          Contact
        </NavLink>
      </div>
      <div>
        <NavLink to="user" style={navStyle}>
          User
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
