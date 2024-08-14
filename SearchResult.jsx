import React from 'react';
import './SearchResult.css';

const SearchResult = ({ result }) => {
  return (
    <div
      className='search-result' // Container for individual search result
      onClick={(e) => alert(`You clicked on ${result.name}`)} // Showing an alert with the result name on click
    >
      {result.name} {/* Displaying the name of the search result */}
    </div>
  );
};

export default SearchResult;
