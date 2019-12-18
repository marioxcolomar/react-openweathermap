import React, { Component } from 'react'
import '../App.css'
import timestamp from 'time-stamp'
import getWeather from '../controllers/openweather'

//Components
import Weather from './Weather'
import Header from './Header';
import Footer from './Footer'

let apiUrl =
  '//api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&units=metric&appid=' +
  process.env.REACT_APP_OW_API_KEY

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

  getWeather<>(apiUrl)
    .then({data} => {
      console.log('data',data)
    })
    .catch(error => {
      console.log('Error: ', error)
    })


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
        <div className="main">
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
          />
        </div>

        <Footer
          timestamp={this.state.timestamp}
        />
      </div>
    );
  }
}

export default App;
