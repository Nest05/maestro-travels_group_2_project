import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) =>{
    return (
        <div id="search">
        <label>Search transaction by description:</label>
        <br/>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
    )
}

export default SearchBar