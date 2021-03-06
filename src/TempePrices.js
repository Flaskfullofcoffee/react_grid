import React, { Component } from 'react'
import PriceInfoTempe from './PriceInfoTempe'
import './App.scss'

  class TempePrices extends Component {
    constructor() {
      super()
      this.state = {
        priceIndex: 0
      };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(idx) {
      return () => this.setState({ priceIndex: idx });
    }

      render() {

        const price = (idx) => this.state.priceIndex === idx ? 'active' && 'current': null;
        return (
            <div className='prices-tempe'>
              <div className='prices'>
                <button className={`btn hourly ${price(0)} `} onClick={this.handleClick(0)}>Hourly</button>
                <button className={`btn binge  ${price(1)}`} onClick={this.handleClick(1)}>Binge</button>
                <button className={`btn bulk  ${price(2)}`} onClick={this.handleClick(2)}>Bulk</button>
                <button className={`btn twenty-four  ${price(3)}`} onClick={this.handleClick(3)}>24hr Binge</button>
              </div>
              <PriceInfoTempe priceIndex={this.state.priceIndex}/>
            </div>
          )
      }
  }

  export default TempePrices
