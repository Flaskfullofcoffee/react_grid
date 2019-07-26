import React, { Component } from 'react'
import './App.scss'

class PriceInfoPhx extends Component {

    render() {
      const option = (idx) => this.props.priceIndex === idx ? 'reveal' : 'hide';
      return (
          <section className='price-info price-info-phoenix'>
          <div className={`price-wrapper hourly ${option(0)}`}>
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
              <p>BenQ 24"  144hz xl's</p>
              <hr />
            </div>
            <div className='card'>
              <h3>VIP</h3>
              <p className='cost'>$8/hr</p>
              <hr />
              <p>Intel i7 7<sup>th</sup> Gen</p>
              <hr />
              <p>16GB Ram</p>
              <hr />
              <p>NVIDIA GTX 2070</p>
              <hr />
              <p>BenQ 27" 240hz xl's</p>
              <hr />
            </div>
          </div>
          <div className={`price-wrapper package ${option(1)}`}>
            <div className='card'>
              <h3>Standard</h3>
              <p className='cost'>6hr Binge<br />$15</p>
              <hr />
              <p className='cost'>10hr Binge<br />$20</p>
            </div>
            <div className='card descriptor'>
              <h3>Binge</h3>
              <hr />
              <p>Binge time starts from the moment you log on & lasts for 24hrs on standard & 16hrs on VIP. This means you have 24/16 hours to use the package before it expires.
              </p>
            </div>
            <div className='card'>
              <h3>VIP</h3>
              <p className='cost'>6hr Binge<br />$22</p>
              <hr />
              <p className='cost'>10hr Binge<br />$27</p>
            </div>
          </div>
          <div className={`price-wrapper package ${option(2)}`}>
            <div className='card'>
              <h3>Standard</h3>
              <p className='cost'>6hr Bulk<br />$20</p>
              <hr />
              <p className='cost'>10hr Bulk<br />$25</p>
            </div>
            <div className='card descriptor'>
              <h3>Bulk</h3>
              <hr />
              <p>Bulk time starts from the moment you log on & lasts for 48hrs on standard & 36hrs on VIP. This means you have 48/36 hours to use the package before it expires.
              </p>
            </div>
            <div className='card'>
              <h3>VIP</h3>
              <p className='cost'>6hr Bulk<br />$27</p>
              <hr />
              <p className='cost'>10hr Bulk<br />$32</p>
            </div>
          </div>
          <div className={`price-wrapper package ${option(3)}`}>
            <div className='card'>
              <h3>Standard</h3>
              <p className='cost'>Mon - Thurs<br />$40</p>
              <hr />
              <p className='cost'>Thurs - Sun<br />$45</p>
            </div>
            <div className='card descriptor'>
              <h3>24/hr Binge</h3>
              <hr />
              <p>Binge time starts from the moment you log on & lasts for 72hrs on standard & 48hrs on VIP. This means you have 3 days or 2 days to use the package.
              </p>
            </div>
            <div className='card'>
              <h3>VIP</h3>
              <p className='cost'>Mon - Thurs<br />$47</p>
              <hr />
              <p className='cost'>Thurs - Sun<br />$52</p>
            </div>
            </div>
          </section>
        )
    }
}

export default PriceInfoPhx
