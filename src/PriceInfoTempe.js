import React, { Component } from 'react'
import './App.scss'

class PriceInfoTempe extends Component {

    render() {

      const option = (idx) => this.props.priceIndex === idx ? 'reveal' : 'hide';
      return (
          <section className='price-info price-info-tempe'>
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
                <p>Binge time starts from the moment you log on & continues until the full six or ten hours is spent. This means that the timer will continue whether you are logged on or not.
                </p>
              </div>
              <div className='card'>
                <h3>VIP</h3>
                <p className='cost'>6hr Binge<br />$20</p>
                <hr />
                <p className='cost'>10hr Binge<br />$25</p>
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
                <p>Bulk time starts from the moment you login & expires after a full 24hrs. Meaning all un-spent time will expire 24hrs after login. Time may be paused by logging off.
                </p>
              </div>
              <div className='card'>
                <h3>VIP</h3>
                <p className='cost'>6hr Bulk<br />$25</p>
                <hr />
                <p className='cost'>10hr Bulk<br />$30</p>
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
                <p>Binge time starts from the moment you log on & continues until the full six or ten hours is spent. This means that the timer will continue whether you are logged on or not.
                </p>
              </div>
              <div className='card'>
                <h3>VIP</h3>
                <p className='cost'>Mon - Thurs<br />$45</p>
                <hr />
                <p className='cost'>Thurs - Sun<br />$50</p>
              </div>
            </div>
          </section>
        )
    }
}

export default PriceInfoTempe
