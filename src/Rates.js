import React, { Component } from 'react'
import TempePrices from './TempePrices'
import PhoenixPrices from './PhoenixPrices'
import './App.scss'

class Rates extends Component {
  constructor() {
    super()
    this.state = {
      activeIdx: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(idx) {
    return () => this.setState({ activeIdx: idx });
  }

    render() {

      const location = (idx) => this.state.activeIdx === idx ? 'active' : 'inActive';
      const highlight = (idx) => this.state.activeIdx === idx ? 'current' : null;
      return (
          <section id='rates_section' className='rates'>
            <h2 className='title'>Rates</h2>
            <div className='location-rate'>
              <button className={`btn tempe ${highlight(0)}`} onClick={this.handleClick(0)}>Tempe</button>
              <button className={`btn phoenix ${highlight(1)}`} onClick={this.handleClick(1)}>Phoenix</button>
            </div>
            <div className={`${location(0)}`}>
              <TempePrices />
            </div>
            <div className={`${location(1)}`}>
              <PhoenixPrices />
            </div>
          </section>
        )
    }
}

export default Rates
