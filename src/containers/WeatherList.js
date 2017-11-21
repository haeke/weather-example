import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(data) {
    const name = data.city.name;

    //return the temperature of a city that was searched for
    const temps = data.list.map(weather => weather.main.temp);
    const pressure = data.list.map(weather => weather.main.pressure);
    const humidity = data.list.map(weather => weather.main.humidity);
    const { lon, lat } = data.city.coord;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="green" units="K"/></td>
        <td><Chart data={pressure} color="purple" units="hPA" /></td>
        <td><Chart data={humidity} color="yellow" units="%" /></td>
      </tr>
    );
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
