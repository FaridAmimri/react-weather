/** @format */

import React, { useState } from 'react'
import axios from 'axios'

function App() {
  //const url = https://api.openweathermap.org/data/2.5/weather?q=paris&appid=22519734f5421c8f55450aaa03737461

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Paris</p>
          </div>
          <div className='temp'>
            <h1>28°c</h1>
          </div>
          <div className='description'>
            <p>Cloudy</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>30°c</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>60%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
