import React, { Component } from 'react'
import '../App.css'
import timestamp from 'time-stamp'

//Components
import Weather from './Weather'
import Header from './Header';

let apiKey = '254d2233a505bdf1e8e64ea5b4ed6538'
let apiUrl =
  '//api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&units=metric&appid=' +
  apiKey

class App extends Component {
  state = {
    wind: null,
    temp: null,
    humidity: null,
    temp_min: null,
    temp_max: null,
    timestamp: null,
    city: null,
    country: null
  }

  fetchWeatherData = () => {
    fetch(apiUrl)
      .then(res => {
        if (res >= 400 || !res.ok) {
          throw new Error("Server failed to respond")
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          wind: data.wind.speed,
          temp: data.main.temp,
          humidity: data.main.humidity,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          timestamp: timestamp("HH:mm:ss"),
          city: data.name,
          country: data.sys.country
        })
      })
  }


  componentDidMount() {
    this.fetchWeatherData()
    //this.timer = setInterval(() => this.fetchWeatherData(), 60000)
  }

  /* componentWillUnmount() {
    this.timer = null
  }
 */
  render() {
    return (
      <div className="App">
        <Header
          city={this.state.city}
          country={this.state.country}
        />
        <Weather
          wind={this.state.wind}
          temp={this.state.temp}
          humidity={this.state.humidity}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          timestamp={this.state.timestamp}
        />
      </div>
    );
  }
}

export default App;
