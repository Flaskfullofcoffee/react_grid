import React, { Component } from 'react'
import PriceInfoTempe from './PriceInfoTempe'
import './App.scss'

class PricesTempe extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     activeIdx: 0
  //   };
  //   this.handleClick = this.handleClick.bind(this)
  // }
  //
  // handleClick(idx) {
  //   return () => this.setState({ activeIdx: idx });
  // }

    render() {

      const tempe = (idx) => this.props.activeIdx === idx ? 'reveal' : 'hide';
      return (
            <div className={`prices ${tempe(0)}`}>
              <div className='prices-tempe'>
                <button className='btn hourly'>Hourly</button>
                <button className='btn binge'>Binge</button>
                <button className='btn bulk'>Bulk</button>
                <button className='btn twenty-four'>24hr Binge</button>
              </div>
              <PriceInfoTempe />
            </div>
        )
    }
}

export default PricesTempe
