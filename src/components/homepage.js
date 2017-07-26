import React, { Component } from 'react';
import SearchBar from './searchbar';
import BeerTable from './beer-table';

class HomePage extends Component {

  onSubmit(values) {
    console.log(values);
  }

  render() {


    return(
      <div id="container">
        <div className="Header">
          <h1>99 Bottles</h1>
          <p>Welcome to 99 Bottles! Let this be your guide to find all the
            breweries your heart but mostly you liver can handle.</p>
        </div>
        <SearchBar />
        <BeerTable />
      </div>
    )
  }
}

export default HomePage;
