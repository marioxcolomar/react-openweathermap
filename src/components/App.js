import React, { Component } from 'react'
import '../App.css'
import timestamp from 'time-stamp'

//Components
import Header from './Header'
import Weather from './Weather'

let apiKey = '254d2233a505bdf1e8e64ea5b4ed6538'
let apiUrl = 
    '//api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&units=metric&appid=' + 
    apiKey

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wind: null,
      humidity: null,
      timestamp: null,
      city: null,
      country: null
    }
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
        humidity: data.main.humidity,
        timestamp: timestamp("HH:mm:ss"),
        city: data.name,
        country: data.sys.country
      })
    })
  }


  componentDidMount() {
    this.fetchWeatherData()
    this.timer = setInterval(() => this.fetchWeatherData(), 60000)
  }

  componentWillUnmount() {
    this.timer = null
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Weather 
          wind={this.state.wind}
          humidity={this.state.humidity}
          timestamp={this.state.timestamp}
          city={this.state.city}
          country={this.state.country}
          />
      </div>
    );
  }
}

export default App;