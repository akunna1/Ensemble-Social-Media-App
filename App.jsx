import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import { useState } from 'react'; // useState hook for managing state

const App = () => {
  // Initializing state to hold search results with an empty array
  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} /> {/* Rendering SearchBar and pass setResults function as a prop */}
        <SearchResultsList results={results} /> {/* Rendering SearchResultsList and pass results as a prop */}
      </div>
    </div>
  );
};

export default App;