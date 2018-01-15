import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(data) {
    try {
      const name = data.city.name || 'Boston';

      //return the temperature of a city that was searched for
      const temps = data.list.map(weather => weather.main.temp);
      const pressure = data.list.map(weather => weather.main.pressure);
      const humidity = data.list.map(weather => weather.main.humidity);

      return (
        <tr key={name}>
          <td>{name}</td>
          <td><Chart data={temps} color="green" units="K"/></td>
          <td><Chart data={pressure} color="purple" units="hPA" /></td>
          <td><Chart data={humidity} color="yellow" units="%" /></td>
        </tr>
      );
    } catch (e) {
      console.log(e);
      return (
        <div>
          That is not a valid city name in the United States.
        </div>
      );
    };
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Kelvin)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

export default connect(mapStateToProps)(WeatherList);
