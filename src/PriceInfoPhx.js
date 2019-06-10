import React, { Component } from 'react'
import './App.scss'

class PriceInfoPhx extends Component {

    render() {
      return (
          <section className='price-info price-info-phoenix'>
            <div className='price-wrapper'>
              <div className='card'>
                <h3>Standard</h3>
                <p className='cost'>$5/hr</p>
                <hr />
                <p>Intel i5 7<sup>th</sup> Gen</p>
                <hr />
                <p>16GB Ram</p>
                <hr />
                <p>NVIDIA GTX 1070</p>
                <hr />
                <p>BenQ 24" esports 240hz xl's</p>
                <hr />
              </div>
              <div className='card'>
                <h3>VIP</h3>
                <p className='cost'>$7/hr</p>
                <hr />
                <p>Intel i7 7<sup>th</sup> Gen</p>
                <hr />
                <p>16GB Ram</p>
                <hr />
                <p>NVIDIA GTX 1080</p>
                <hr />
                <p>BenQ 27" 2K esports 144hz xl's</p>
                <hr />
              </div>
            </div>
          </section>
        )
    }
}

export default PriceInfoPhx
