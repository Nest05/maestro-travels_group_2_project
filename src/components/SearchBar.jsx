import React from "react";
import "./Search.css"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div id="search">
      <label>Search destination:</label>
      <br />
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
