import React from 'react';
import './SearchResultsList.css';
import SearchResult from './SearchResult';

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'> {/* Container for the list of search results */}
      {
        results.map((result, id) => { // Iterating over the results array
          return <SearchResult result={result} key={id} />; // Rendering a SearchResult for each result and using index as key
        })
      }
    </div>
  );
};

export default SearchResultsList;
