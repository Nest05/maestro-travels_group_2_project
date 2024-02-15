import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navBar">
      
          <NavLink to={"/"} className="navBar1">Home</NavLink>
        
          <NavLink to={"/about"}>About</NavLink>

          <NavLink to={"/destination-form"}>Add Destination</NavLink>

          <NavLink to={"/login"}>Login</NavLink>
       
    </div>
  );
}

export default Navbar;
