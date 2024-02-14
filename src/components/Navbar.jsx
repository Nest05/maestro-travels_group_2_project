import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      
          <NavLink to={"/"}>Home</NavLink>
        
          <NavLink to={"/about"}>About</NavLink>

          <NavLink to={"/destination-form"}>Add Destination</NavLink>

          <NavLink to={"/login"}>Login</NavLink>
       
    </div>
  );
}

export default Navbar;
