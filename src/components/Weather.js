import React from 'react'

const Weather = props => {
  return (
    <div className="main">
      <p><b>Wind speed: </b>{props.wind} m/s</p>
      <p><b>Temperature: </b>{props.temp}&#xb0;</p>
      <p><b>Highest temperature: </b>{props.temp_max}&#xb0;</p>
      <p><b>Lowest emperature: </b>{props.temp_min}&#xb0;</p>
      <p><b>Humidity: </b>{props.humidity} %</p>
      <p><b>Last update: </b>{props.timestamp}</p>
    </div>
  );
}

export default Weather