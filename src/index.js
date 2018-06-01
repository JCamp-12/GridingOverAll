import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwBujhlQvH3lfKuGXkyrLp97Iqk234Jqc';



// Create a new component
// will produce HTML

const App = () => {
  return (
  <div>
    <SearchBar />
  </div> 
);
}

// have to make sure they get inserted into the DOM
// on the web browser

ReactDOM.render(<App />, document.querySelector('.container'));