import React, { Component } from 'react'
import Carousel from './Carousel.js'
import Games from './Games.js'
import Rates from './Rates.js'
import Contact from './Contact.js'
import Location from './Location.js'
import './App.scss'

class App extends Component {

    render() {
      return (
            <div>
              <Carousel />
              <Games />
              <Rates />
              <Contact />
              <Location />
            </div>
        )
    }
}

export default App
