import React, { useState } from 'react'
import axios from 'axios'
import "./Main.css"

function Text() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app" id="weather">
      <div className="search" id="weather">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter a City'
          type="text" 
          id="weather"/>
      </div>
      <div className="contain" id="weather">
        <div className="top" id="weather">
          <div className="location" id="weather">
            <h4 id="weather">{data.name}</h4>
          </div>
          <div className="temp" id="weather">
            {data.main ? <p id="weather">{data.main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="description" id="weather">
            {data.weather ? <h4 id="weather">Conditions: {data.weather[0].main}</h4> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom" id="weather">
            <div className="feels" id="weather">
              {data.main ? <p className='bold' id="weather">{data.main.feels_like.toFixed()}°F</p> : null}
              <p id="weather">Feels Like</p>
            </div>
            <div className="humidity" id="weather">
              {data.main ? <p className='bold' id="weather">{data.main.humidity}%</p> : null}
              <p id="weather">Humidity</p>
            </div>
            <div className="wind" id="weather">
              {data.wind ? <p className='bold' id="weather">{data.wind.speed.toFixed()} MPH</p> : null}
              <p id="weather">Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default Text;