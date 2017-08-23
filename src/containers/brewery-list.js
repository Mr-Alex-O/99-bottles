import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class breweryList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log(`link should be going to /brewery/${id}`);
    <Link to={`/brewery/${id}`} target="_blank"></Link>
  }

  //brewery tbody
  renderBeer(breweryData){
    if(!breweryData.streetAddress && !breweryData.brewery.description){
      return;
    }

    if(!breweryData.brewery.description){
      return(
        <tr className="row" key={breweryData.id} onClick={()=>this.handleClick(breweryData.breweryId)}>
            <td className="col-md-2">{breweryData.brewery.name}</td>
            <td className="col-md-4">{`${breweryData.streetAddress}, ${breweryData.locality}, ${breweryData.region}`}</td>
            <td className="col-md-6 brewery-description">Brewery located in {breweryData.locality}, {breweryData.region}</td>
        </tr>

      )
    }

    return (
      <tr className="row" key={breweryData.breweryId} onClick={()=>this.handleClick(breweryData.breweryId)}>
          <td className="col-md-2">{breweryData.brewery.name}</td>
          <td className="col-md-4">{`${breweryData.streetAddress}, ${breweryData.locality}, ${breweryData.region}`}</td>
          <td className="col-md-6 brewery-description">{breweryData.brewery.description}</td>
      </tr>
    )
  };
  //brewery header
  render() {
    return(
      <table className="table table-sm text-left table-inverse table-bordered">
          <thead>
            <tr className="row">
              <th className="col-md-2 text-center">Brewery</th>
              <th className="col-md-4 text-center">Street Address</th>
              <th className="col-md-6 text-center">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.beer.map(this.renderBeer.bind(this))}
          </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
          beer: state.beer
        };
}

export default connect(mapStateToProps)(breweryList);
