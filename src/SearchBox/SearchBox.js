import React from 'react';
import './SearchBox.css'

const SearchBox = ({onInputChange, onKeyPressed}) => {
  return(
    <div className="search">
      <input className="sb" type='text' placeholder='Search Recipes' onChange={onInputChange} onKeyPress= {onKeyPressed}/>
    </div>
  );
}

export default SearchBox;
