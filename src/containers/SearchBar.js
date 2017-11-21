import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

// connect getWeather with the searchbar

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  };

  //prevent the browser from submitting the form when they hit enter
  onFormSubmit(event) {
    event.preventDefault();

    this.props.getWeather(this.state.term);

    //clear the search input
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a Five Day forecast for any city in the US"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

//bind action creator with getWeather action
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWeather }, dispatch);
};

//null was passed because no state is needed in connect method
export default connect(null, mapDispatchToProps)(SearchBar);
