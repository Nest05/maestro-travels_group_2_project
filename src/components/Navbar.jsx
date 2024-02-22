import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navBar">
      
          <NavLink to={"/"} exact activeClassName="activeLink">Home</NavLink>
        
          <NavLink to={"/about"} activeClassName="activeLink">About</NavLink>

          <NavLink to={"/login"} activeClassName="activeLink">Login</NavLink>

          <NavLink to={"/register"} activeClassName="activeLink">Signup</NavLink>
       
    </div>
  );
}

export default Navbar;

