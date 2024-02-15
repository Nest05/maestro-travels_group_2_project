import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navBar">
      
          <NavLink to={"/"} >Home</NavLink>
        
          <NavLink to={"/about"}>About</NavLink>

          <NavLink to={"/login"}>Login</NavLink>
       
    </div>
  );
}

export default Navbar;
