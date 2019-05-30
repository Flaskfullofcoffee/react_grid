import React, { Component } from 'react'
import './App.scss'

class Carousel extends Component {

    render() {
      return (
            <section className='carousel'>
              <div className='slider'>
                <div className='slide'></div>
                <div className='slide'></div>
                <div className='slide'></div>
              </div>
              <div className='dots-wrapper'></div>
            </section>
        )
    }
}

export default Carousel
