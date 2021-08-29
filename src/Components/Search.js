import React from "react";

const Search = () => {
  return (
    <div className="Search-box" id="Search">
      <input className="search-text" type="text" placeholder="ابحث عن "></input>
      <a className="search-btn">
        <i class="fas fa-search"></i>
      </a>
    </div>
  );
};

export default Search;
