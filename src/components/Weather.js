import React from 'react'

const Weather = props => {
    return (
      <div className="main">
        <h1>
          Weather in {/* {props.city}, {props.country} */}
        </h1>
       
        <p>
          <b>Wind speed: </b>
          {props.wind} m/s
        </p>
        <p>
          <b>Humidity: </b>
          {props.humidity} %
        </p>
        <p>
          <b>Last update: </b>
          {props.timestamp}
        </p>
      </div>
    );
}

export default Weather