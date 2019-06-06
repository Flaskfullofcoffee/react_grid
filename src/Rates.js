import React, { Component } from 'react'
import PriceInfo from './PriceInfo.js'
import './App.scss'

class Rates extends Component {

    render() {
      return (
          <section className='rates'>
            <h2 className='title'>Rates</h2>
            <div className='location-rate'>
              <button className='btn tempe'>Tempe</button>
              <button className='btn phoenix'>Phoenix</button>
            </div>
            <div className='prices'>
              <button className='btn hourly'>Hourly</button>
              <button className='btn binge'>Binge</button>
              <button className='btn bulk'>Bulk</button>
              <button className='btn twenty-four'>24hr Binge</button>
            </div>
            <PriceInfo />
          </section>
        )
    }
}

export default Rates
