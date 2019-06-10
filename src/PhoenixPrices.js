import React, { Component } from 'react'
import PriceInfoPhx from './PriceInfoPhx'
import './App.scss'

  class PhoenixPrices extends Component {

      render() {
        return (
            <div className='prices-phoenix'>
              <div className='prices'>
                <button className='btn hourly'>Hourly</button>
                <button className='btn binge'>Binge</button>
                <button className='btn bulk'>Bulk</button>
                <button className='btn twenty-four'>24hr Binge</button>
              </div>
              <PriceInfoPhx />
            </div>
          )
      }
  }

  export default PhoenixPrices
