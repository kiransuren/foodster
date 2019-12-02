import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import SearchBox from './SearchBox/SearchBox';
import SearchResultView from './SearchResultView/SearchResultView';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searched: '',
      recipes: [],
      page: '',
    }
  }

  onInputChange = (event) => {
    this.setState({searched:event.target.value});
    //this.getRecipes(this.state.searched);
  }

  onKeyPressed = (event) =>{
    if(event.key === "Enter"){
      this.getRecipes(this.state.searched);
    }
  }

  getRecipes = (value) => {
    value = value.replace(' ', '%20');
    const searchLink = `https://www.food2fork.com/api/search?key=70d97648cd9ded25cd81400c6b2ce828&q=${value}&page=1`;
    fetch(searchLink)
    .then(response => response.json())
    .then(file => this.setState({recipes:file.recipes}));

  }

  render(){
  return (
    <div className="App">
      <Navbar />
      <SearchBox onInputChange={this.onInputChange} onKeyPressed={this.onKeyPressed}/>
      <SearchResultView results={this.state.recipes} />
      <div id="title-head">
        <p>Foodster, Created by Kiran S.</p>
      </div>
    </div>
  );}

}

export default App;
