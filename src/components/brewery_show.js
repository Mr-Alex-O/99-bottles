import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBrewery } from '../actions/index';


class BreweryShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBrewery(id);
  }

  breweryDescription(brewery){
    if(brewery.desciption){
      return;
    } else {
        return (
          <div className="brewery-description-solo">
            <h3>Description</h3>
            <p> {brewery.description}</p>
          </div>
        );
    }
  }

  breweryImage(brewery) {

    if(!brewery.images){
      return <div className="no-image align-top"><h2>No Logo</h2></div>;
    }
      return (
        <img src={brewery.images.squareMedium} className="img-responsive col-lg-12 align-top" alt="Brewery Logo"/>
      );
  }

  breweryWebsite(brewery) {
    console.log(`Brewery website ${brewery.website}`);
    console.log(`Does this brewery have a website? ${brewery.hasOwnProperty(brewery.website)}`);
    if(brewery.website) {
      return (
        <div className="brewery-website">
        <h3>Website</h3>
        <a href={brewery.website} target="_blank"> {brewery.website} </a>
        </div>
      );
    }
      return <div>No Website</div>;
  }

  backButton(brewery){
    return <button>Back</button>
  }

  render() {
    const { brewery } = this.props;
    if(!brewery) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <div className="header jumbotron text-center">
          <h1>{brewery.name}</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="logo col-lg-6">
              {this.breweryImage(brewery)}
            </div>
            <div className="brewery-details col-lg-6">
              {this.breweryDescription(brewery)}
              {this.breweryWebsite(brewery)}
              {this.backButton(brewery)}
            </div>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps({ beer }, ownProps) {
    console.log(`beer ${beer}`);
  return { brewery: beer[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getBrewery })(BreweryShow);
