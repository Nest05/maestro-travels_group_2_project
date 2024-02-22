import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import { FaHome } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { MdOutlinePersonAdd } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";

function Navbar() {
  return (
    <div className="navBar">
      
          <NavLink to={"/"} exact activeClassName="activeLink"><FaHome /> Home</NavLink>
        
          <NavLink to={"/about"} activeClassName="activeLink"><MdLibraryBooks /> About</NavLink>

          <NavLink to={"/login"} activeClassName="activeLink"><LuLogIn /> Login</NavLink>

          <NavLink to={"/register"} activeClassName="activeLink"><MdOutlinePersonAdd /> Signup</NavLink>
       
    </div>
  );
}

export default Navbar;

