import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return(
    <nav>
      <div id="navigation">
        <button className = "foodButton" type="button">By Diet</button>
        <button className = "foodButton" type="button">By Ingredient</button>
        <button className = "foodButton" type="button">By Cost</button>
      </div>
    </nav>
  );
}

export default Navbar
