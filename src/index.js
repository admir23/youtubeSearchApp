import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBNEG0K30R917f2ZqnhPDuC6nngf1jmxQY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(< App />, document.querySelector(".container"));