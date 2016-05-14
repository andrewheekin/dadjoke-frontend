import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    // const name = cityData.city.name;
    const name = 'dadjoke';
    const temps = cityData.jokesTold.map(jokes => jokes.date_posted);
    // const pressures = cityData.list.map(weather => weather.main.pressure);
    // const humidities = cityData.list.map(weather => weather.main.humidity);
    // const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><Chart data={temps} color="orange" units="K" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps({ jokes }) {
  return { jokes }; // identical to { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);