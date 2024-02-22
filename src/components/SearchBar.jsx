import React from "react";
import "./Search.css"
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div id="search">
      <label>Search destination:</label>
      <br />
      <IoSearch id="searchIcon"/>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
