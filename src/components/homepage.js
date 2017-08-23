import SearchBar from '../containers/searchbar';
import React, { Component } from 'react';
import BreweryList from '../containers/brewery-list';

class HomePage extends Component {

  render() {
    return(
      <div id="container">
        <div className="Header">
          <h1>99 Bottles</h1>
          <p>Welcome to 99 Bottles! Let this be your guide to find all the
            breweries your heart but mostly you liver can handle.</p>
        </div>
        <SearchBar />
        <BreweryList />
      </div>
    )
  }
}

export default HomePage;
