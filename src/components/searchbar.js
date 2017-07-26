import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBeer } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
                  city: '',
                  state: ''
                };

    this.onCityChange = this.onCityChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCityChange(event) {
    this.setState({city: event.target.value});
  }

  onStateChange(event) {
    this.setState({state: event.target.value});
  }

  onFormSubmit(event) {
  event.preventDefault();
  console.log(`City: ${this.state.city} State: ${this.state.state}`)
  this.props.getBeer(this.state.city, this.state.state);
  this.setState({
                  city: '',
                  state: ''
                });

}

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="form-group form-inline">
        <input
          placeholder="Enter city"
          className="form-group form-control"
          value={this.state.city}
          onChange={this.onCityChange}
        />
        <input
          placeholder="Enter state"
          className="form-group form-control"
          value={this.state.state}
          onChange={this.onStateChange}
        />
      <span className="form-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBeer }, (dispatch));
}

export default connect(null, mapDispatchToProps)(SearchBar)
