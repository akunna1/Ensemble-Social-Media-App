import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ setResults }) => {
  // State to hold the input value
  const [input, setInput] = useState('');

  // Function to fetch data based on input value
  const fetchData = (value) => {
    // Asynchronous function to get data from an API
    fetch('https://jsonplaceholder.typicode.com/users') // Fetching user data from placeholder API
      .then((response) => response.json()) // Converting the response to JSON format
      .then(json => {
        // Filtering results based on input value
        const results = json.filter((user) => {
          return (
            value && // Ensuring value is not empty
            user && // Ensuring user object is not null
            user.name && // Ensuring user has a name property
            user.name.toLowerCase().includes(value.toLowerCase()) // Case-insensitive match
          );
        });
        setResults(results); // Updating the results state in parent component
      });
  }

  // Function to handle changes in input field
  const handleChange = (value) => {
    setInput(value); // Updating the input state
    fetchData(value); // Fetching data based on the new input value
  }

  return (
    <div className='input-wrapper'> {/* Container for the search input */}
      <FaSearch id='search-icon' />
      <input
        placeholder='Type to search...'
        value={input} // Controlled value of the input field
        onChange={(e) => handleChange(e.target.value)} // Calling handleChange with the new input value
      />
    </div>
  );
};

export default SearchBar;
