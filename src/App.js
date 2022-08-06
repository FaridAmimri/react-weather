/** @format */

import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=22519734f5421c8f55450aaa03737461`

  const searchLocation = (event) => {
    const city = event.target.value

    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')"
        setLocation('')
      })
    }
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Search'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {/* data.main ? => checking first if data.main is returned */}
            {data.main ? <h1>{data.main.temp.toFixed()}°c</h1> : null}
          </div>
          <div className='description'>
            {/* data.weather ? => checking first if data.weather is returned */}
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className='bottom'>
            <div className='feels'>
              {/* data.main ? => checking first if data.main is returned */}
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°c</p> : null}
              <p>Feels like</p>
            </div>
            <div className='humidity'>
              {/* data.main ? => checking first if data.main is returned */}
              {data.main ? <p className='bold'>{data.main.humidity.toFixed()}°c</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {/* data.wind ? => checking first if data.wind is returned */}
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}km/h</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
